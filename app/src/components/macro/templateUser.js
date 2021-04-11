import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Row, Col } from "react-bootstrap";

import Template1 from "../../assets/phone/template1.svg";
import Template2 from "../../assets/phone/template2.svg";
import Template3 from "../../assets/phone/template3.svg";

export default function TemplateUser() {
  return (
    <div className="page w-100">
      <Navbar className="bg-white" expand="lg">
        <Navbar.Brand href="#home">Template</Navbar.Brand>
      </Navbar>
      <div className="pt-4 w-100">
        <Row className="mr-0">
          <Col md={3}>
            <Link to="/add">
              <img src={Template1} alt="template" />
            </Link>
          </Col>
          <Col md={3}>
            <img src={Template2} alt="template" />
          </Col>
          <Col md={3}>
            <img src={Template3} alt="template" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
