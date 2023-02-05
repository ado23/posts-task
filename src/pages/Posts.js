import { useEffect, useState } from "react";
import PostsApi from "services/external/endpoints/posts";

import Novi from "components/core/Post";

import MainAppContainer from "layout/containers/MainAppContainer";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   PostsApi.getData()
  //     .then((result) => {
  //       setPosts(result);
  //     })
  //     .catch((e) => console.log("EROR HAS HAPPEND: ", e));
  // }, []);

  console.log("POSTS JE: ", posts);

  return (
    <MainAppContainer>
      <div className="row g-3">
        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>

        <div className="col-md-4 py-3">
          <Novi />
        </div>
      </div>
    </MainAppContainer>
  );
};

export default Posts;
