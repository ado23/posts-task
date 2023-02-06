import Comment from "components/comment";
import Text from "components/typography/Text";

import { Card, CommentContainer } from "./styled";

const Comments = ({ data }) => (
  <Card className="card border-info">
    <div className="card-body d-flex flex-column">
      <Text text="Comments section" />

      <CommentContainer className="px-0 overflow-auto ">
        {data.map((comment) => (
          <Comment
            key={comment.id}
            title={comment.name}
            text={comment.body}
            author={comment.email}
          />
        ))}
      </CommentContainer>
    </div>
  </Card>
);

export default Comments;
