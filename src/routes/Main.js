import { Routes, Route } from "react-router-dom";

import Posts from "pages/Posts";
import PostDetails from "pages/PostDetails";
import NotFound from "pages/NotFound";
import MainAppContainer from "layout/containers/MainAppContainer";

import ROUTE_PATHS from "./paths";

const RoutesComponent = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "routes/Main");

  return (
    <MainAppContainer helloFromMessage={helloFromMessage}>
      <Routes>
        <Route
          path={ROUTE_PATHS["POSTS"]}
          element={<Posts helloFromMessage={helloFromMessage} />}
        />
        <Route
          path={ROUTE_PATHS["POST_DETAILS"]}
          element={<PostDetails helloFromMessage={helloFromMessage} />}
        />
        <Route
          path={ROUTE_PATHS["NOT_FOUND"]}
          element={<NotFound helloFromMessage={helloFromMessage} />}
        />
      </Routes>
    </MainAppContainer>
  );
};

export default RoutesComponent;
