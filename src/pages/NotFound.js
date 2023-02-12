import { Link } from "react-router-dom";
import HeaderTitle from "components/typography/HeaderTitle";

const NotFoundPage = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "pages/NotFound");

  return (
    <div className="d-flex justify-content-center container-fluid p-3 p-md-5 text-center bg-light">
      <div className="d-flex flex-column justify-content-center col-md-5 p-lg-5 mx-auto my-5">
        <div className="display-4 fw-normal">
          <HeaderTitle title="ERROR 404" helloFromMessage={helloFromMessage} />
          <HeaderTitle title="Page not found" helloFromMessage={helloFromMessage} />
        </div>

        <div className="my-3">
          <Link className="btn btn-outline-secondary" to={-1}>
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
