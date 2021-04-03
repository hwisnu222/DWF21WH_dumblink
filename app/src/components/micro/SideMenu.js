import React from "react";

import { Navbar } from "react-bootstrap";

import Logo from "../../assets/logo.svg";
import Template from "../../assets/icon/template.svg";
import Profile from "../../assets/icon/profile.svg";
import MyLink from "../../assets/icon/link.svg";
import Logout from "../../assets/icon/logout.svg";

export default function SideMenu() {
  return (
    <div className="list d-flex flex-column align-items-between justify-content-between">
      <div>
        <Navbar className="white" expand="lg">
          <Navbar.Brand href="#home" className="mx-auto">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
        </Navbar>

        <ul className="mt-4">
          <li className="list-menu">
            <img src={Template} alt="menu" className="mr-2" /> Template
          </li>
          <li className="list-menu">
            <img src={Profile} alt="menu" className="mr-2" /> Profile
          </li>
          <li className="list-menu">
            <img src={MyLink} alt="menu" className="mr-2" /> My Link
          </li>
        </ul>
      </div>
      <span className="logout">
        <img src={Logout} alt="menu" className="mr-2" /> Logout
      </span>
    </div>
  );
}
