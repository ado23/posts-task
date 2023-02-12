import { Link } from "react-router-dom";
import HeaderTitle from "components/typography/HeaderTitle";

const NotFoundPage = () => (
  <div className="d-flex justify-content-center container-fluid p-3 p-md-5 text-center bg-light">
    <div className="d-flex flex-column justify-content-center col-md-5 p-lg-5 mx-auto my-5">
      <div className="display-4 fw-normal">
        <HeaderTitle title="ERROR 404" />
        <HeaderTitle title="Page not found" />
      </div>

      <div className="my-3">
        <Link className="btn btn-outline-secondary" to={-1}>
          Go back
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
