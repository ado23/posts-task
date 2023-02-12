import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div
    className="d-flex justify-content-center container-fluid p-3 p-md-5 text-center bg-light"
    style={{ height: "100vh" }}
  >
    <div className="d-flex flex-column justify-content-center col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Error 404 Page not found</h1>

      <div>
        <Link className="btn btn-outline-secondary" to={-1}>
          Go back
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
