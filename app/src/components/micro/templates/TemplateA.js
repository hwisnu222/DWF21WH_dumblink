import { Container } from "react-bootstrap";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from "react-share";

import ListViewLink from "../listview/ListViewLink";

export default function TemplateA({ link }) {
  const urlCurrent = window.location.href;

  return (
    <Container className="text-center pt-5 container-preview position-relative">
      <img src={link?.image} alt="" className="rounded-circle image-preview" />
      <h3 className="mt-2 title-preview">{link?.title}</h3>
      <p className="text-muted subtitle-preview">{link?.description}</p>
      <div className="mt-2 list-preview-container">
        <ListViewLink links={link?.links} />
      </div>

      {/* social media */}
      <div className="social-media shadow-sm p-2">
        <span className="mr-2 ml-2">Share This:</span>
        <span>
          <FacebookShareButton url={urlCurrent} className="mr-2">
            <FacebookIcon size={38} round={true} />
          </FacebookShareButton>

          <TwitterShareButton url={urlCurrent} className="mr-2">
            <TwitterIcon size={38} round={true} />
          </TwitterShareButton>

          <LineShareButton url={urlCurrent}>
            <LineIcon size={38} round={true} />
          </LineShareButton>
        </span>
      </div>
    </Container>
  );
}
