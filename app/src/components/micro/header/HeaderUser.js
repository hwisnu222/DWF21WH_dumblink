import React from "react";

import { Navbar, Button, Form, Container } from "react-bootstrap";

import Logo from "../../../assets/logo.svg";

export default function HeaderUser() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div inline className="ml-auto">
          <Button variant="warning" className="font-weight-bold text-white">
            Dashboard
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
