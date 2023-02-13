import PropTypes from "prop-types";

const SmallText = ({ text, className, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/Typography/SmallText");

  return <small className={`text-muted ${className}`}>{text}</small>;
};

SmallText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export default SmallText;
