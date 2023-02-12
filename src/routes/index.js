import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import MainRoutes from "./Main";

import ROUTE_PATHS from "./paths";

const RoutesComponent = () => (
  <Routes>
    <Route path={ROUTE_PATHS["HOME"]} element={<Home />} />
    <Route path="/*" element={<MainRoutes />} />
  </Routes>
);

export default RoutesComponent;
