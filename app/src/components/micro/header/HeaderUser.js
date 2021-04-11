import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap";

import Logo from "../../../assets/logo.svg";

export default function HeaderUser() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <div inline className="ml-auto">
          <Link to="/template">
            <Button variant="warning" className="font-weight-bold text-white">
              Dashboard
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
