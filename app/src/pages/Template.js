import React from "react";

import { Row, Col } from "react-bootstrap";

import TemplateUser from "../components/macro/templateUser";
import SideBar from "../components/micro/SideMenu";

export default function Template() {
  return (
    <div>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <TemplateUser />
        </Col>
      </Row>
    </div>
  );
}
