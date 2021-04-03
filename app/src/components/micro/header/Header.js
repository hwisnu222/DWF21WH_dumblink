import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Button, Form, Container, Modal } from "react-bootstrap";

import Logo from "../../../assets/logo.svg";

export default function Header() {
  // initial

  // state
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  // function
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
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              className="mt-4 font-weight-bold"
              variant="warning"
              block
              type="submit"
              onClick={() => setLogin(!login)}
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
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Full Name" />
            </Form.Group>
            <Button
              className="mt-4 font-weight-bold"
              variant="warning"
              block
              type="submit"
              onClick={() => setRegister(!register)}
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
