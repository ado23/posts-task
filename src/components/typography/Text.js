import PropTypes from "prop-types";

const Text = ({ text, className, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/Typography/Text");

  return <p className={className}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Text;
