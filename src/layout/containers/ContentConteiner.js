import PropTypes from "prop-types";

const Container = ({ children }) => (
  <div className="container pt-5 d-flex flex-column justify-content-center flex-grow-1">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Container;
