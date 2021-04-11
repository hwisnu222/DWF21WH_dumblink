import React from "react";

import { Row, Col } from "react-bootstrap";

import SideBar from "../components/micro/SideMenu";
import LinkUser from "../components/macro/LinkUser";

export default function MyLink() {
  return (
    <div className="container-fluid p-0">
      <Row noGutters={true}>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <LinkUser />
        </Col>
      </Row>
    </div>
  );
}
