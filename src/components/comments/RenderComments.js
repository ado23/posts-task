import PropTypes from "prop-types";

import Comment from "components/comment";
import styles from "./styles.module.css";

function RenderComments(comments, helloFromMessage) {
  console.log(`${helloFromMessage}`, "components/comments/RenderComments");

  return (
    <div className={`px-0 overflow-auto ${styles.commentContainer}`}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          text={comment.body}
          title={comment.name}
          author={comment.email}
          helloFromMessage={helloFromMessage}
        />
      ))}
    </div>
  );
}

RenderComments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default RenderComments;
