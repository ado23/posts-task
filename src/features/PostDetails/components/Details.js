import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback, useContext } from "react";

import MainContext from "features/Main/MainContext";

import Post from "components/postView";
import getPost from "../api/getPostDetails";
import getPostComments from "../api/getPostComments";

const Details = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const { postID } = useParams();
  const { users } = useContext(MainContext);

  const getAuthor = useCallback(
    (postsUserId) => users.find((user) => user.id === postsUserId)?.name,
    [users]
  );

  useEffect(() => {
    getPost(setPost, postID);
    getPostComments(setComments, postID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, body, userId } = post;

  return <Post title={title} text={body} author={getAuthor(userId)} comments={comments} />;
};

export default Details;
