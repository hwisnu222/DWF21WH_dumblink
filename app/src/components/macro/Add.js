import React from "react";

import { Navbar, Row, Col, Button, Card, Form } from "react-bootstrap";

import NoImage from "../../assets/icon/noimage.svg";

export default function Add() {
  return (
    <div>
      <div className="page w-100">
        <Navbar className="bg-white" expand="lg">
          <Navbar.Brand href="#home">Add Link</Navbar.Brand>
        </Navbar>
        <Form>
          <div className="p-4 w-100">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="font-weight-bold">Create Link</h5>
              <Button
                variant="warning"
                className="font-weight-bold text-white"
                type="submit"
              >
                Publish
              </Button>
            </div>

            <Row className="mt-4">
              <Col md={7}>
                <Card className="p-3">
                  <div>
                    <img src={NoImage} alt="image" />
                    <Button variant="warning" className="ml-5 text-white">
                      Upload
                    </Button>
                  </div>
                  <Form.Group className="mt-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ex. Your Title"
                      className="border-top-0 border-right-0 border-left-0 border-bottom-2"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Descripstion</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ex. Description Here"
                      className="border-top-0 border-right-0 border-left-0 border-bottom-2"
                    />
                  </Form.Group>

                  <div>
                    <div className="d-flex align-items-start bg-grey p-3">
                      <img src={NoImage} alt="image" />
                      <div className="ml-4">
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Title Link
                          </span>
                          <Form.Control
                            type="email"
                            placeholder="Facebook"
                            className="bg-transparent border-top-0 border-right-0 border-left-0 border-bottom-2"
                          />
                        </Form.Group>
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Link
                          </span>
                          <Form.Control
                            type="url"
                            placeholder="www.facebook.com"
                            className="bg-transparent border-top-0 border-right-0 border-left-0 border-bottom-2"
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={5}>
                <div className="device d-flex justify-content-center mt-4">
                  <div
                    className="deviceContainer"
                    style={{ width: "50%", maxWidth: "400px" }}
                  >
                    <div className="iphonex black portrait">
                      <div className="caseBorder"></div>
                      <div className="case"></div>
                      <div className="reflection"></div>
                      <div className="screen"></div>
                      <div className="camera"></div>
                      <div className="speaker"></div>
                      <div className="homeButtonBorder"></div>
                      <div className="homeButton"></div>
                      <div className="content">
                        <div class="iframe-container">
                          <iframe
                            loading="lazy"
                            src="http://www.localhost:3000/preview/12"
                            scrolling="no"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
}
