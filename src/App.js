import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import ROUTE_PATHS from "routes";

import Home from "pages/Home";
import Posts from "pages/Posts";
import NotFound from "pages/NotFound";
import PostDetails from "pages/PostDetails";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path={ROUTE_PATHS["HOME"]} element={<Home />} />
      <Route path={ROUTE_PATHS["POSTS"]} element={<Posts />} />
      <Route path={ROUTE_PATHS["POST_DETAILS"]} element={<PostDetails />} />
      <Route path={ROUTE_PATHS["NOT_FOUND"]} element={<NotFound />} />
    </Routes>
  </ThemeProvider>
);

export default App;
