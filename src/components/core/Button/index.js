import PropTypes from "prop-types";

const Button = ({ text, type, onClick, classes, helloFromMessage, ...rest }) => {
  console.log(`${helloFromMessage}`, "components/core/button");

  return (
    <button type={type} className={`btn ${classes}`} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
