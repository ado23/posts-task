import { Link } from "react-router-dom";
import ROUTE_PATHS from "routes/paths";

import styles from "./styles.module.css";

const HomePage = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "pages/Home");

  return (
    <div
      className={`d-flex justify-content-center container-fluid p-3 p-md-5 text-center bg-light ${styles.home}`}
    >
      <div className="d-flex flex-column justify-content-center col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Welcome to posts site</h1>

        <p className="lead fw-normal">
          This project has been made using React library and Bootstrap.
        </p>

        <div>
          <Link className="btn btn-outline-secondary" to={ROUTE_PATHS["POSTS"]}>
            Press here to enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
