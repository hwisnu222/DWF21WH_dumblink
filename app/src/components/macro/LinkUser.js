import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
import { API_BASE } from "../../config/api";
import { Badge, Navbar, Form, Button, Row, Col, Modal } from "react-bootstrap";

import Search from "../../assets/icon/search.svg";
import View from "../../assets/icon/view.svg";
import Edit from "../../assets/icon/edit.svg";
import Delete from "../../assets/icon/delete.svg";
import ListLink from "../../assets/icon/listLink.svg";

export default function LinkUser() {
  const [confirmDelete, setConfirmDelete] = useState({
    isDelete: false,
    id: "",
  });
  const [links, setLinks] = useState(null);
  const [edit, setEdit] = useState(null);
  const [formEdit, setFormEdit] = useState({
    title: "",
    description: "",
  });

  const { data, loading, error, refetch } = useQuery("getLink", async () => {
    const response = await API_BASE.get(`link`);
    return response;
  });

  const deleteLink = useMutation(async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await API_BASE.delete(`/delete-link/${id}`, config);
    await refetch();
    setLinkToList();
  });

  const updateLink = useMutation(async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(formEdit);

    console.log("update", id);

    await API_BASE.put(`/update-link/${id}`, body, config);
    await refetch();
    setLinkToList();
  });

  const setLinkToList = async () => {
    setLinks(data?.data?.data?.link);
  };

  const handleDeleteLink = () => {
    deleteLink.mutate(confirmDelete.id);
    setConfirmDelete({ ...confirmDelete, isDelete: !confirmDelete.isDelete });
  };

  const handleUpdateLink = (id) => {
    updateLink.mutate(id);
  };

  const onChangeEdit = (e) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setLinkToList();
  }, []);

  return (
    <div>
      <div className="page w-100">
        <Navbar className="bg-white" expand="lg">
          <Navbar.Brand href="#home">My Account</Navbar.Brand>
        </Navbar>
        <div className="p-4 w-100">
          <div className="d-flex align-items-center">
            <div className="mr-4">
              <span className="mr-2 font-weight-bold">All Links</span>
              <Badge pill variant="warning" className="text-white">
                {links?.length}
              </Badge>
            </div>
            <div className="border border-top-0 border-right-0 border-left-0 border-bottom-3 d-flex w-75">
              <img src={Search} alt="search" />
              <Form.Control
                type="email"
                placeholder="Find your link"
                className="border-0 bg-transparent input-line"
              />
            </div>
            <Button
              className="ml-4 font-weight-bold text-white"
              variant="warning"
            >
              Search
            </Button>
          </div>

          <div className="mt-5">
            {links?.map((link) => (
              <Row className="mb-4">
                <Col md={6} className="d-flex">
                  <div>
                    <img src={ListLink} alt="list link" />
                  </div>
                  <div className="ml-4 d-flex flex-column justify-content-center">
                    <h5 className="font-weight-bold">
                      {edit == link.id ? (
                        <Form className="d-flex">
                          <div>
                            <Form.Control
                              type="text"
                              name="title"
                              placeholder="title"
                              className="border-top-0 border-left-0 border-right-0 bg-transparent input-line w-100"
                              onChange={(e) => onChangeEdit(e)}
                            />
                            <Form.Control
                              type="text"
                              name="description"
                              placeholder="description"
                              className="border-top-0 border-left-0 border-right-0 bg-transparent input-line w-100"
                              onChange={(e) => onChangeEdit(e)}
                            />
                          </div>
                          <Button
                            variant="warning"
                            className="ml-3 font-weight-bold"
                            onClick={() => {
                              handleUpdateLink(link.id);
                              setEdit(null);
                            }}
                          >
                            Save
                          </Button>
                        </Form>
                      ) : (
                        link.title
                      )}
                    </h5>

                    <span className="text-muted">
                      localhost:3000/preview/{link.id}
                    </span>
                  </div>
                </Col>
                <Col
                  md={1}
                  className="text-center d-flex align-items-center justify-content-center flex-column"
                >
                  <h6 className="font-weight-bold">{link.viewCount}</h6>
                  <span className="text-muted">Visit</span>
                </Col>
                <Col
                  md={5}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Link to={`/preview/${link.id}`}>
                    <img
                      src={View}
                      alt="view"
                      className="mr-4 icon-edit-link pe-auto"
                    />
                  </Link>
                  <img
                    src={Edit}
                    alt="edit"
                    className="mr-4 icon-edit-link pe-auto"
                    onClick={() => {
                      setEdit(link.id);
                    }}
                  />
                  <img
                    src={Delete}
                    alt="delete"
                    className="mr-4 icon-edit-link"
                    onClick={() => {
                      setConfirmDelete({
                        isDelete: !confirmDelete.isDelete,
                        id: link.id,
                      });
                    }}
                  />
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </div>

      {/* delete confirm */}
      <Modal
        show={confirmDelete.isDelete}
        onHide={() => {
          setConfirmDelete({
            ...confirmDelete,
            isDelete: !confirmDelete,
          });
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="pt-4 ml-4">You are sure you want to remove this link</p>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="danger" className="px-5" onClick={handleDeleteLink}>
            Yes
          </Button>
          <Button
            variant="light"
            className="px-5"
            onClick={() => {
              setConfirmDelete({
                ...confirmDelete,
                isDelete: !confirmDelete,
              });
            }}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
