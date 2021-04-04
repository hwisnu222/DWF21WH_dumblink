import React from "react";

import { Row, Col } from "react-bootstrap";

import SideBar from "../components/micro/SideMenu";
import Link from "../components/macro/Link";

export default function MyLink() {
  return (
    <div className="container-fluid p-0">
      <Row noGutters={true}>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <Link />
        </Col>
      </Row>
    </div>
  );
}
