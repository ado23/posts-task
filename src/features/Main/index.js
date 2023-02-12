import { useEffect, useState, useMemo } from "react";

import getUsers from "./api/getUsers";
import getPosts from "./api/getPosts";
import getComments from "./api/getComments";

import MainContext from "./MainContext";

const Main = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
    getUsers(setUsers);
    getComments(setComments);
  }, []);

  const postsWithUsers = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        userName: users.find((user) => user.id === post.userId)?.name
      })),
    [posts, users]
  );

  return (
    <MainContext.Provider
      value={{
        posts,
        users,
        comments,
        postsWithUsers
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Main;
