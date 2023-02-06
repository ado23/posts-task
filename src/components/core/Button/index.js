/**
 *
 * @param {*} param0
 * @returns
 */

const Button = ({ text, onClick, classes, ...rest }) => {
  return (
    <button type="button" className={`btn ${classes}`} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
