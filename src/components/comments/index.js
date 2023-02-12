import PropTypes from "prop-types";

import Text from "components/typography/Text";
import RenderComments from "./RenderComments";

const Comments = ({ data, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/comments/index");

  return (
    <div className="card border-info my-2">
      <div className="card-body d-flex flex-column">
        <Text text="Comments section" helloFromMessage={helloFromMessage} />

        {RenderComments(data, helloFromMessage)}
      </div>
    </div>
  );
};

Comments.propTypes = {
  data: PropTypes.array.isRequired
};

export default Comments;
