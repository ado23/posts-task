import { Routes, Route } from "react-router-dom";

import Posts from "pages/Posts";
import PostDetails from "pages/PostDetails";
import NotFound from "pages/NotFound";
import MainAppContainer from "layout/containers/MainAppContainer";

import ROUTE_PATHS from "./paths";

const RoutesComponent = () => (
  <MainAppContainer>
    <Routes>
      <Route path={ROUTE_PATHS["POSTS"]} element={<Posts />} />
      <Route path={ROUTE_PATHS["POST_DETAILS"]} element={<PostDetails />} />
      <Route path={ROUTE_PATHS["NOT_FOUND"]} element={<NotFound />} />
    </Routes>
  </MainAppContainer>
);

export default RoutesComponent;
