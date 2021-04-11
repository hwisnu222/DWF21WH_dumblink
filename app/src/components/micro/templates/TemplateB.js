import { Container, Card } from "react-bootstrap";

export default function TemplateA({ link }) {
  return (
    <div style={{ background: "skyblue" }} className="py-4">
      <Container className="card pt-5  container-preview vh-100 text-center">
        <img
          src={`http://localhost:5000/uploads/${link?.image}`}
          alt=""
          className="rounded-circle image-preview mx-auto"
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
    </div>
  );
}
