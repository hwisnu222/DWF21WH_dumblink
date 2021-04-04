import React from "react";

import { Form, Navbar, Card, Button } from "react-bootstrap";

export default function Account() {
  return (
    <div>
      <div className="page w-100">
        <Navbar className="bg-white" expand="lg">
          <Navbar.Brand href="#home">My Account</Navbar.Brand>
        </Navbar>
        <div className="p-4 w-100">
          <h5 className="font-weight-bold">My Information</h5>

          <Form className="mt-4">
            <Card className="p-4 rounded-3">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Andi Ganteng"
                  className="border-top-0 border-right-0 border-left-0 border-bottom-2"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Andi@mail.com"
                  className="border-top-0 border-right-0 border-left-0 border-bottom-2"
                />
              </Form.Group>
            </Card>
            <div inline className="p-3 d-flex justify-content-end">
              <Button
                className=" ml-auto mr-3 font-weight-bold"
                variant="warning"
                type="submit"
              >
                Save Account
              </Button>
              <Button
                className="font-weight-bold"
                variant="danger"
                type="submit"
              >
                Delete Account
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
