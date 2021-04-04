import React from "react";

import { Row, Col } from "react-bootstrap";

import SideBar from "../components/micro/SideMenu";
import Account from "../components/macro/Account";

export default function MyAccount() {
  return (
    <div>
      <div className="container-fluid p-0">
        <Row noGutters={true}>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            <Account />
          </Col>
        </Row>
      </div>
    </div>
  );
}
