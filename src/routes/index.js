import { Routes, Route } from "react-router-dom";

import OtherRoutes from "./Home";
import MainRoutes from "./Main";

import ROUTE_PATHS from "./paths";

const RoutesComponent = () => (
  <Routes>
    <Route path="/*" element={<MainRoutes />} />
    <Route path={ROUTE_PATHS["HOME"]} element={<OtherRoutes />} />
  </Routes>
);

export default RoutesComponent;
