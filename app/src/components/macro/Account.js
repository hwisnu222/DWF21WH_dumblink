import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API_BASE } from "../../config/api";

import { UserContext } from "../../context/userContext";

import { Form, Navbar, Card, Button, Modal } from "react-bootstrap";

export default function Account() {
  // state
  const router = useHistory();
  const [user, dispatchUser] = useContext(UserContext);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmSuccess, setConfirmSuccess] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
  });

  const { fullName, email } = profile;

  // function
  const onChangeProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const deleteUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const deleteResponse = await API_BASE.delete("/delete", config);
    console.log(deleteResponse);
  });

  const { data, loading, error, refetch } = useQuery("getProfile", async () => {
    const response = await API_BASE.get(`profile`);
    return response;
  });

  const updateUser = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      fullName,
      email,
    });

    const updateResponse = await API_BASE.put("/update", body, config);
    console.log(updateResponse);
    refetch();
  });

  const updateProfile = (e) => {
    updateUser.mutate();
    setConfirmSuccess(!confirmSuccess);

    e.preventDefault();
  };

  const DeleleProfile = (e) => {
    deleteUser.mutate();
    localStorage.removeItem("token");
    dispatchUser({ type: "LOGOUT" });
    router.push("/");
  };

  useEffect(() => {
    const name = data?.data?.data?.user?.fullName;
    const emailUser = data?.data?.data?.user?.email;

    setProfile({ fullName: name, email: emailUser });
  }, []);

  return (
    <div>
      <div className="page w-100">
        <Navbar className="bg-white" expand="lg">
          <Navbar.Brand href="#home">My Account</Navbar.Brand>
        </Navbar>
        <div className="p-4 w-100">
          <h5 className="font-weight-bold">My Information</h5>

          <Form className="mt-4" onSubmit={updateProfile}>
            <Card className="p-4 rounded-3">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={fullName}
                  placeholder="Andi Ganteng"
                  className="border-top-0 border-right-0 border-left-0 border-bottom-2 input-line"
                  onChange={(e) => {
                    onChangeProfile(e);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  disabled
                  placeholder="Andi@mail.com"
                  className="border-top-0 border-right-0 border-left-0 border-bottom-2"
                  onChange={(e) => {
                    onChangeProfile(e);
                  }}
                />
              </Form.Group>
            </Card>
            <div inline className="p-3 d-flex justify-content-end">
              <Button
                className=" ml-auto mr-3 font-weight-bold"
                variant="warning"
                type="submit"
              >
                Save Account
              </Button>
              <Button
                className="font-weight-bold"
                variant="danger"
                onClick={() => {
                  setConfirmDelete(!confirmDelete);
                }}
              >
                Delete Account
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* delete confirm */}
      <Modal
        show={confirmDelete}
        onHide={() => {
          setConfirmDelete(!confirmDelete);
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="pt-4 ml-4">
            You are sure you want to remove this account
          </p>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="danger" className="px-5" onClick={DeleleProfile}>
            Yes
          </Button>
          <Button
            variant="light"
            className="px-5"
            onClick={() => {
              setConfirmDelete(!confirmDelete);
            }}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>

      {/* success save confirm */}
      <Modal
        show={confirmSuccess}
        onHide={() => {
          setConfirmSuccess(!confirmSuccess);
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="pt-4 ml-4">Success update information account</p>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button
            variant="success"
            className="px-5"
            onClick={() => {
              setConfirmSuccess(!confirmSuccess);
            }}
          >
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
