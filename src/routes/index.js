import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import MainRoutes from "./Main";

import ROUTE_PATHS from "./paths";

const RoutesComponent = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "routes/index");

  return (
    <Routes>
      <Route path={ROUTE_PATHS["HOME"]} element={<Home helloFromMessage={helloFromMessage} />} />
      <Route path="/*" element={<MainRoutes helloFromMessage={helloFromMessage} />} />
    </Routes>
  );
};

export default RoutesComponent;
