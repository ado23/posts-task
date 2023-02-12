import PropTypes from "prop-types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/core/button";

import Text from "components/typography/Text";
import Title from "components/typography/Title";
import SmallText from "components/typography/SmallText";

const Post = ({ postId, title, text, subtext, action }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/posts/${postId}`), [postId, navigate]);

  return (
    <div className="card flex-grow-1 border-info">
      <div className="card-body d-flex flex-column justify-content-between">
        <Title title={title} />
        <Text text={text} />

        <div className="d-flex justify-content-between align-items-center">
          <SmallText text={subtext} />
          <Button classes="btn-sm btn-outline-secondary" text={action} onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
};

export default Post;
