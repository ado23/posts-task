import PropTypes from "prop-types";

import Comment from "components/comment";
import styles from "./styles.module.css";

function RenderComments(comments) {
  return (
    <div className={`px-0 overflow-auto ${styles.commentContainer}`}>
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.body} title={comment.name} author={comment.email} />
      ))}
    </div>
  );
}

RenderComments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default RenderComments;
