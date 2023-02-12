import PropTypes from "prop-types";

import Line from "components/line";
import Text from "components/typography/Text";
import Title from "components/typography/Title";
import SmallText from "components/typography/SmallText";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const Comment = ({ title, text, author }) => (
  <div className="pb-3">
    <Title title={title} />
    <Text text={text} />

    <UserIcon className="mx-1" />
    <SmallText text={author} />
    <Line />
  </div>
);

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Comment;
