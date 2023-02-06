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

export default Post;
