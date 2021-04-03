import React from "react";

import { Button, Col, Row, Container } from "react-bootstrap";

import Device from "../../assets/device.svg";

export default function HomeUser() {
  return (
    <div className="home-page">
      <Container>
        <Row>
          <Col md={6} className="text-white">
            <h1 className="title-home">
              <p>The Only Link</p>
              <p>You’ll Ever Need</p>
            </h1>
            <p>
              Add a link for your Social Bio and optimize your social media
              traffic.
            </p>
            <p className="mt-4"> safe, fast and easy to use</p>
            <Button variant="dark" className="mt-5">
              Get Started For Free
            </Button>
          </Col>
          <Col md={6}>
            <img src={Device} alt="device" className="img-home" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
