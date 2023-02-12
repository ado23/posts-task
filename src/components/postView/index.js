import Text from "components/typography/Text";
import Title from "components/typography/Title";
import Author from "components/typography/Author";

import Button from "components/core/button";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import Comments from "components/comments";
import { useNavigate } from "react-router-dom";

const Post = ({ title, text, author, comments }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="card shadow bg-white rounded">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card flex-grow-1" style={{ borderRadius: "6px 6px 0px 0px" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <Title title={title} />
              <Text text={text} />

              <div>
                <UserIcon className="mx-1" />
                <Author name={author} />
              </div>
            </div>
          </div>

          <Comments data={comments} />
        </div>
      </div>

      <div className="my-3 d-flex justify-content-end">
        <Button
          style={{ display: "flex" }}
          classes="btn-sm btn-outline-secondary"
          text="Go back"
          onClick={goBack}
        />
      </div>
    </>
  );
};

export default Post;
