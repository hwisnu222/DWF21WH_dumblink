import React from "react";

import { Badge, Navbar, Form, Button, Row, Col } from "react-bootstrap";

import Search from "../../assets/icon/search.svg";
import View from "../../assets/icon/view.svg";
import Edit from "../../assets/icon/edit.svg";
import Delete from "../../assets/icon/delete.svg";
import ListLink from "../../assets/icon/listLink.svg";

export default function Link() {
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
                9
              </Badge>
            </div>
            <div className="border border-top-0 border-right-0 border-left-0 border-bottom-3 d-flex w-75">
              <img src={Search} alt="search" />
              <Form.Control
                type="email"
                placeholder="Find your link"
                className="border-0 bg-transparent"
              />
            </div>
            <Button
              className="ml-4 font-weight-bold text-white"
              variant="warning"
              type="submit"
            >
              Search
            </Button>
          </div>

          <div className="mt-5">
            <Row>
              <Col md={4} className="d-flex">
                <div>
                  <img src={ListLink} alt="list link" />
                </div>
                <div className="ml-4 d-flex flex-column justify-content-center">
                  <h5 className="font-weight-bold">WaysFood</h5>
                  <span className="text-muted">localhost:3000/link/name</span>
                </div>
              </Col>
              <Col
                md={4}
                className="text-center d-flex align-items-center justify-content-center flex-column"
              >
                <h6 className="font-weight-bold">10</h6>
                <span className="text-muted">Visit</span>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={View}
                  alt="view"
                  className="mr-4 icon-edit-link pe-auto"
                />
                <img
                  src={Edit}
                  alt="edit"
                  className="mr-4 icon-edit-link pe-auto"
                />
                <img
                  src={Delete}
                  alt="delete"
                  className="mr-4 icon-edit-link"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
