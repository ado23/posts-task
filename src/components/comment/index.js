import Text from "components/typography/Text";
import Title from "components/typography/Title";
import Author from "components/typography/Author";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const Comment = ({ title, text, author }) => (
  <div className="pb-3">
    <Title title={title} />
    <Text text={text} />

    <UserIcon className="mx-1" />
    <Author name={author} />
    <hr className="border-dark opacity-10" />
  </div>
);

export default Comment;
