import PropTypes from "prop-types";

import Line from "components/line";
import Text from "components/typography/Text";
import Title from "components/typography/Title";
import SmallText from "components/typography/SmallText";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const Comment = ({ title, text, author, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/comment/index");

  return (
    <div className="pb-3">
      <Title title={title} helloFromMessage={helloFromMessage} />
      <Text text={text} helloFromMessage={helloFromMessage} />

      <UserIcon className="mx-1" />
      <SmallText text={author} helloFromMessage={helloFromMessage} />
      <Line helloFromMessage={helloFromMessage} />
    </div>
  );
};

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Comment;
