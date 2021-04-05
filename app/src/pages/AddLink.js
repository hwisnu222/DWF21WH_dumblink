import React from "react";

import { Row, Col } from "react-bootstrap";
import SideBar from "../components/micro/SideMenu";
import Add from "../components/macro/Add";

export default function AddLink() {
  return (
    <div>
      <div className="container-fluid p-0">
        <Row noGutters={true}>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            <Add />
          </Col>
        </Row>
      </div>
    </div>
  );
}
