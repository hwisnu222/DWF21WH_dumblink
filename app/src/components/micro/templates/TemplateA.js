import { Container } from "react-bootstrap";

export default function TemplateA({ link }) {
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
