import PropTypes from "prop-types";

const Input = ({ placeholder, handleOnChange, label }) => (
  <>
    {label && <label className="form-label">{label}</label>}

    <input
      type="search"
      className="form-control"
      placeholder={placeholder}
      onChange={(event) => handleOnChange(event.target.value)}
    />
  </>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default Input;
