import React, { useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { API_BASE } from "../../config/api";

import { Navbar, Row, Col, Button, Card, Form } from "react-bootstrap";

import NoImage from "../../assets/icon/noimage.svg";

export default function Add() {
  const { idTemplate } = useParams();
  // state
  const [preview, setPreview] = useState({ isPreview: false, id: null });
  const [arrayLinks, setArrayLinks] = useState([]);

  const [Link, setLink] = useState({
    title: "",
    description: "",
    imageFile: null,
  });
  const [Links, setLinks] = useState({
    title: "",
    url: "",
  });
  const [image, setImage] = useState(null);

  const { title, description, imageFile } = Link;

  // add link user
  const addLink = useMutation(async () => {
    const body = new FormData();

    body.append("title", title);
    body.append("description", description);
    body.append("template", idTemplate);
    body.append("imageFile", imageFile);
    body.append("link", JSON.stringify(arrayLinks));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const add = await API_BASE.post("/add-link", body, config);

    const { status } = add.data;
    if (status == "success") {
      const { id } = add?.data?.data?.link?.addLink;
      // router.push("/link");
      setPreview({ isPreview: true, id: id });
      clearState();
    }
  });

  // cleare state
  const clearState = () => {
    setLinks({
      title: "",
      url: "",
    });

    setLink({
      title: "",
      description: "",
      imageFile: null,
    });

    setArrayLinks([]);

    setImage(null);
  };

  const onChangeLink = (e) => {
    const tempForm = { ...Link };

    tempForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;

    setLink(tempForm);
  };

  const onChangeLinks = (e) => {
    setLinks({
      ...Links,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddLink = (e) => {
    addLink.mutate();
    e.preventDefault();
  };

  const addLinks = () => {
    setArrayLinks([...arrayLinks, Links]);
    console.log("array", arrayLinks);
  };

  return (
    <div>
      <div className="page w-100">
        <Navbar className="bg-white" expand="lg">
          <Navbar.Brand href="#home">Add Link</Navbar.Brand>
        </Navbar>
        <Form onSubmit={handleAddLink}>
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
                    <img src={image ? image : NoImage} alt="image" />
                    <label
                      for="custom-file"
                      className="btn btn-warning ml-5 text-white font-weight-bold"
                    >
                      Upload
                    </label>

                    <Form.File
                      id="custom-file"
                      name="imageFile"
                      custom
                      className="hidden"
                      onChange={(e) => {
                        onChangeImage(e);
                        onChangeLink(e);
                      }}
                    />
                  </div>
                  <Form.Group className="mt-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={(e) => {
                        onChangeLink(e);
                      }}
                      placeholder="ex. Your Title"
                      className="border-top-0 border-right-0 border-left-0 border-bottom-2 input-line"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Descripstion</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      onChange={(e) => {
                        onChangeLink(e);
                      }}
                      placeholder="ex. Description Here"
                      className="border-top-0 border-right-0 border-left-0 border-bottom-2 input-line"
                    />
                  </Form.Group>

                  <div className="mt-4">
                    {arrayLinks.map((item) => (
                      <div className="mb-2 p-2 border border-2 border-dark rounded">
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Title Link
                          </span>
                          <p>{item.title}</p>
                        </Form.Group>
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Link
                          </span>
                          <p>{item.url}</p>
                        </Form.Group>
                      </div>
                    ))}
                    <div className="d-flex align-items-start bg-grey p-3">
                      <img src={NoImage} alt="image" />
                      <div className="ml-4">
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Title Link
                          </span>
                          <Form.Control
                            type="text"
                            name="title"
                            placeholder="Facebook"
                            onChange={(e) => {
                              onChangeLinks(e);
                            }}
                            className="bg-transparent border-top-0 border-right-0 border-left-0 border-bottom-2 input-line"
                          />
                        </Form.Group>
                        <Form.Group>
                          <span className="text-muted title-list-link">
                            Link
                          </span>
                          <Form.Control
                            type="url"
                            name="url"
                            placeholder="www.facebook.com"
                            onChange={(e) => {
                              onChangeLinks(e);
                            }}
                            className="bg-transparent border-top-0 border-right-0 border-left-0 border-bottom-2 input-line"
                          />
                        </Form.Group>
                        <Button
                          variant="warning"
                          className="font-weight-bold"
                          onClick={addLinks}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={5}>
                <div className="device d-flex justify-content-center mt-4">
                  <div
                    className="deviceContainer"
                    style={{ width: "60%", maxWidth: "400px" }}
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
                          {preview.isPreview && (
                            <iframe
                              loading="lazy"
                              src={`http://www.localhost:3000/preview/${preview.id}`}
                              scrolling="no"
                            ></iframe>
                          )}
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
