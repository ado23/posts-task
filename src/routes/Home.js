import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import ROUTE_PATHS from "./paths";

const HomeRoute = () => (
  <Routes>
    <Route path={ROUTE_PATHS["HOME"]} element={<Home />} />
  </Routes>
);

export default HomeRoute;
