import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function PageFailed() {
  const router = useHistory();
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <h3>Oppss, Can't load preview link </h3>

      <Button variant="warning" onClick={() => router.goBack()}>
        Back
      </Button>
    </Container>
  );
}
