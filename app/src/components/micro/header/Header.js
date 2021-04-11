import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { API_BASE } from "../../../config/api";
import { UserContext } from "../../../context/userContext";

import { Navbar, Button, Form, Container, Modal } from "react-bootstrap";

import Logo from "../../../assets/logo.svg";

export default function Header() {
  // initial
  const [user, dispatchUser] = useContext(UserContext);
  const router = useHistory();

  // state
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const { email, password } = formLogin;
  const {
    fullName: name,
    email: emailRegister,
    password: passwordRegister,
  } = formRegister;

  // function
  const onChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeRegister = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const Login = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    const loginResponse = await API_BASE.post("/login", body, config);

    const status = loginResponse.data.status;

    if (status == "success") {
      const token = loginResponse.data.data.token;

      localStorage.setItem("token", token);
      dispatchUser({ type: "LOGIN" });
      router.push("/template");
    }
  });

  const Register = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email: emailRegister,
      password: passwordRegister,
      fullName: name,
    });

    const registerResponse = await API_BASE.post("/register", body, config);
    // console.log(registerResponse.data.data.user);

    const status = registerResponse.data.data.status;

    if (status == "success") {
      const token = registerResponse.data.data.user.token;

      localStorage.setItem("token", token);
      dispatchUser({ type: "LOGIN" });
      router.push("/template");
    }
  });

  const handleLogin = (e) => {
    Login.mutate();
    e.preventDefault();
  };

  const handleRegister = (e) => {
    Register.mutate();
    e.preventDefault();
  };

  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <div inline className="ml-auto">
            <Button
              variant="light"
              className="mr-2 font-weight-bold"
              onClick={() => setLogin(!login)}
            >
              Login
            </Button>
            <Button
              variant="warning"
              className="font-weight-bold text-white"
              onClick={() => setRegister(!register)}
            >
              Register
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* modal */}
      <Modal
        show={login}
        onHide={() => setLogin(!login)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title id="contained-modal-title-vcenter font-weight-bold">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  onChangeLogin(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  onChangeLogin(e);
                }}
              />
            </Form.Group>
            <Button
              className="mt-4 font-weight-bold text-white"
              variant="warning"
              block
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
            <p className="text-center opacity-50 mt-2">
              Don't have an account ? Klik
              <Link
                className="text-decoration-none font-weight-bold pl-1 text-warning"
                onClick={() => {
                  setRegister(!register);
                  setLogin(!login);
                }}
              >
                Here
              </Link>
            </p>
          </Form>
        </Modal.Body>
      </Modal>

      {/* register */}
      <Modal
        show={register}
        onHide={() => setRegister(!register)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title id="contained-modal-title-vcenter font-weight-bold">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={(e) => {
                  onChangeRegister(e);
                }}
              />
            </Form.Group>
            <Button
              className="mt-4 font-weight-bold text-white"
              variant="warning"
              block
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
            <p className="text-center opacity-50 mt-2">
              Already have an account ? Klik
              <Link
                className="text-decoration-none font-weight-bold pl-1 text-warning"
                onClick={() => {
                  setRegister(!register);
                  setLogin(!login);
                }}
              >
                Here
              </Link>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
