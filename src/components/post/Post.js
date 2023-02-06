import { useNavigate } from "react-router-dom";

import Button from "components/core/button";

import Text from "components/typography/Text";
import Title from "components/typography/Title";
import Author from "components/typography/Author";
import { useCallback } from "react";

const Post = ({ postId, title, text, subtext, action }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/posts/${postId}`), [postId, navigate]);

  return (
    <div className="card flex-grow-1 border-info" style={{ borderRadius: "6px 6px 0px 0px" }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <Title title={title} />
        <Text text={text} />

        <div className="d-flex justify-content-between align-items-center">
          <Author name={subtext} />
          <Button classes="btn-sm btn-outline-secondary" text={action} onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
};

export default Post;
