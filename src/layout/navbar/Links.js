import { Link } from "react-router-dom";

import ROUTE_PATHS from "routes/paths";

const Links = () => (
  <>
    <Link className="py-2 d-md-inline-block" to={ROUTE_PATHS["HOME"]}>
      HOME
    </Link>

    <Link className="py-2 d-md-inline-block" to={ROUTE_PATHS["POSTS"]}>
      POSTS
    </Link>
  </>
);

export default Links;
