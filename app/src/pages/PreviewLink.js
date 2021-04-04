import React from "react";

import { Container } from "react-bootstrap";

import Facebook from "../assets/social/facebook.png";
import Instagram from "../assets/social/instagram.png";
import Twitter from "../assets/social/twitter.png";
import Youtube from "../assets/social/youtube.png";
import Whatsapp from "../assets/social/whatsapp.png";

export default function PreviewLink() {
  return (
    <Container className="text-center w-50 pt-5">
      <img
        src="https://images.unsplash.com/photo-1617387248297-c0c717db0e1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt=""
        className="rounded-circle image-preview"
      />
      <h3 className="mt-2">Title Name</h3>
      <p className="text-muted">lorem ipsum</p>
      <div className="mt-2">
        <div className="mb-4 list-preview bg-dark d-flex align-items-center py-1 px-3">
          <img
            src={Facebook}
            alt=""
            className="rounded-circle img-social-preview"
          />
          <p className="text-center w-100 text-white my-auto">Facebook</p>
        </div>
        <div className="mb-4 list-preview bg-dark d-flex align-items-center py-1 px-3">
          <img
            src={Instagram}
            alt=""
            className="rounded-circle img-social-preview"
          />
          <p className="text-center w-100 text-white my-auto">Facebook</p>
        </div>
        <div className="mb-4 list-preview bg-dark d-flex align-items-center py-1 px-3">
          <img
            src={Twitter}
            alt=""
            className="rounded-circle img-social-preview"
          />
          <p className="text-center w-100 text-white my-auto">Facebook</p>
        </div>
        <div className="mb-4 list-preview bg-dark d-flex align-items-center py-1 px-3">
          <img
            src={Youtube}
            alt=""
            className="rounded-circle img-social-preview"
          />
          <p className="text-center w-100 text-white my-auto">Facebook</p>
        </div>
        <div className="mb-4 list-preview bg-dark d-flex align-items-center py-1 px-3">
          <img
            src={Whatsapp}
            alt=""
            className="rounded-circle img-social-preview"
          />
          <p className="text-center w-100 text-white my-auto">Facebook</p>
        </div>
      </div>
    </Container>
  );
}
