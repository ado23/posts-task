import { Routes, Route } from "react-router-dom";
import ROUTE_PATHS from "routes";

import Posts from "pages/Posts";
import NotFound from "pages/NotFound";
import PostDetails from "pages/PostDetails";

const App = () => (
  <Routes>
    <Route path={ROUTE_PATHS["POSTS"]} element={<Posts />} />
    <Route path={ROUTE_PATHS["POST_DETAILS"]} element={<PostDetails />} />
    <Route path={ROUTE_PATHS["NOT_FOUND"]} element={<NotFound />} />
  </Routes>
);

export default App;
