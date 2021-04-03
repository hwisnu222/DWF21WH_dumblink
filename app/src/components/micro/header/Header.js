import React from "react";

import { Navbar, Button, Form, Container } from "react-bootstrap";

import Logo from "../../../assets/logo.svg";

export default function Header() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div inline className="ml-auto">
          <Button variant="light" className="mr-2 font-weight-bold">
            Login
          </Button>
          <Button variant="warning" className="font-weight-bold text-white">
            Register
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
