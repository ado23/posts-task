import PropTypes from "prop-types";

import PostCard from "./Post";
import Comments from "components/comments";

const Post = ({ postId, title, text, subtext, action, comments }) => (
  <div className="card shadow bg-white rounded">
    <div className="card-body d-flex flex-column justify-content-between">
      <PostCard postId={postId} title={title} text={text} subtext={subtext} action={action} />

      <Comments data={comments} />
    </div>
  </div>
);

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default Post;
