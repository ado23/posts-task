import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "components/core/button";
import Comments from "components/comments";

import Text from "components/typography/Text";
import Title from "components/typography/Title";
import SmallText from "components/typography/SmallText";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const Post = ({ title, text, author, comments, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/postView/index");

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className="card shadow bg-white rounded">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card flex-grow-1">
            <div className="card-body d-flex flex-column justify-content-between">
              <Title title={title} helloFromMessage={helloFromMessage} />
              <Text text={text} helloFromMessage={helloFromMessage} />

              <div>
                <UserIcon className="mx-1" />
                <SmallText text={author} helloFromMessage={helloFromMessage} />
              </div>
            </div>
          </div>

          <Comments data={comments} helloFromMessage={helloFromMessage} />
        </div>
      </div>

      <div className="my-3 d-flex justify-content-end">
        <Button
          classes="btn-sm btn-outline-secondary d-flex"
          text="Go back"
          onClick={goBack}
          helloFromMessage={helloFromMessage}
        />
      </div>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

Post.defaultProps = {
  title: "",
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default Post;
