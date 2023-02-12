import PropTypes from "prop-types";

import Text from "components/typography/Text";
import RenderComments from "./RenderComments";

const Comments = ({ data }) => (
  <div className="card border-info my-2">
    <div className="card-body d-flex flex-column">
      <Text text="Comments section" />

      {RenderComments(data)}
    </div>
  </div>
);

Comments.propTypes = {
  data: PropTypes.array.isRequired
};

export default Comments;
