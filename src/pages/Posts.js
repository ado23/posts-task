import { useContext, useEffect, useState } from "react";

import Search from "components/form/input";

import MainContext from "features/Main/MainContext";
import RenderPosts from "features/Posts/components/RenderPosts";

import TrendingPosts from "components/trendingPosts";

const PostsPage = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "pages/Posts");

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
    <div className="row g-3">
      <div className="mt-5">
        <TrendingPosts title="#trending posts" helloFromMessage={helloFromMessage} />
      </div>

      <div className="mt-5">
        <Search
          placeholder="Search posts (by username)"
          handleOnChange={handleOnChange}
          helloFromMessage={helloFromMessage}
        />
      </div>

      {RenderPosts(filtered, helloFromMessage)}
    </div>
  );
};

export default PostsPage;
