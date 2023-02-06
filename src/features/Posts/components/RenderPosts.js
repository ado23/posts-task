import { useCallback, useContext, useMemo } from "react";

import Post from "components/post";
import MainContext from "features/Main/MainContext";

const RenderPosts = () => {
  const { posts, users, comments } = useContext(MainContext);

  const getAuthor = useCallback(
    (postsUserId) => users.find((user) => user.id === postsUserId).name,
    [users]
  );

  const postsWithComments = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        comments: comments.filter((comment) => comment.postId === post.id)
      })),
    [posts, comments]
  );

  return postsWithComments.map(({ id, body, title, userId, comments }) => (
    <div key={id} className="col-md-4 py-3 d-flex align-items-stretch">
      <Post
        postId={id}
        text={body}
        title={title}
        action="Read more"
        comments={comments}
        subtext={getAuthor(userId)}
      />
    </div>
  ));
};

export default RenderPosts;
