import RenderPosts from "features/Posts/components/RenderPosts";
import MainAppContainer from "layout/containers/MainAppContainer";
import { useContext, useEffect, useState } from "react";

import MainContext from "features/Main/MainContext";
import Search from "components/form/Input";

const PostsPage = () => {
  const { postsWithUsers } = useContext(MainContext);
  const [filtered, setFiltered] = useState(postsWithUsers);

  useEffect(() => {
    setFiltered(postsWithUsers);
  }, [postsWithUsers]);

  const handleOnChange = (searchText) => {
    const filtered = postsWithUsers.filter(({ userName }) =>
      userName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFiltered(filtered);
  };

  return (
    <MainAppContainer>
      <div className="row g-3">
        <div className="mt-1">
          <div className="card text-center">
            <div className="card-header bg-dark" />
            <div className="card-body bg-light">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  bordeRadius: "0 0 0.5rem 0.5rem",
                  padding: "1rem"
                }}
              >
                <h3
                  style={{
                    color: "black",
                    border: "1px solid black",
                    padding: "1rem",
                    textTransform: "uppercase"
                  }}
                >
                  #TRENDING NEWS
                </h3>
              </div>
            </div>
            <div className="card-footer bg-dark text-muted" />
          </div>
        </div>

        <div className="mt-5">
          <Search placeholder="Search posts" handleOnChange={handleOnChange} />
        </div>

        {RenderPosts(filtered)}
      </div>
    </MainAppContainer>
  );
};

export default PostsPage;
