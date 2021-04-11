import React from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import { API_BASE } from "../config/api";

import { Container } from "react-bootstrap";

import Facebook from "../assets/social/facebook.png";
import Instagram from "../assets/social/instagram.png";
import Twitter from "../assets/social/twitter.png";
import Youtube from "../assets/social/youtube.png";
import Whatsapp from "../assets/social/whatsapp.png";

export default function PreviewLink() {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery("getLink", async () => {
    const response = await API_BASE.get(`/view/${id}`);
    return response;
  });

  const { data: getDataLink } = useQuery("getLinkData", async () => {
    const response = await API_BASE.get(`/detail/${id}`);
    return response;
  });

  console.log(getDataLink);
  const link = getDataLink?.data?.data?.link;
  console.log(link?.image);

  return (
    <Container className="text-center pt-5 container-preview">
      <img
        src={`http://localhost:5000/uploads/${link?.image}`}
        alt=""
        className="rounded-circle image-preview"
      />
      <h3 className="mt-2 title-preview">{link?.title}</h3>
      <p className="text-muted subtitle-preview">{link?.description}</p>
      <div className="mt-2 list-preview-container">
        {link?.links.map((item) => (
          <div
            className="mb-2 mb-md-4 bg-dark d-flex align-items-center py-1 list-preview "
            onClick={() => {
              window.location = item.url;
            }}
          >
            {/* <div className="img-social-preview">
              <img
                src={Facebook}
                alt="social media"
                className="rounded-circle img-fluid vh-50"
              />
            </div> */}
            <p className="text-center w-100 text-white my-auto py-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
