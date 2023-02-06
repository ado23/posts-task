import Text from "components/typography/Text";
import Title from "components/typography/Title";
import Author from "components/typography/Author";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import Comments from "components/comments";

const Post = ({ title, text, author, comments }) => {
  return (
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
  );
};

export default Post;
