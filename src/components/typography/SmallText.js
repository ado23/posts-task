import PropTypes from "prop-types";

const Author = ({ text, className }) => <small className={`text-muted ${className}`}>{text}</small>;

Author.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Author;
