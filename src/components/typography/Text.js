import PropTypes from "prop-types";

const Text = ({ text, className }) => <p className={className}>{text}</p>;

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Text;
