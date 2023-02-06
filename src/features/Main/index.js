import { useEffect, useState } from "react";

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

  console.log("DIV");

  return (
    <MainContext.Provider
      value={{
        posts,
        users,
        comments
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Main;
