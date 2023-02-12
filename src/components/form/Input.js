const Input = ({ placeholder, handleOnChange }) => (
  <input
    type="search"
    className="form-control"
    placeholder={placeholder}
    onChange={(event) => handleOnChange(event.target.value)}
  />
);

export default Input;
