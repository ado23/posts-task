import PropTypes from "prop-types";

const AppContainer = ({ children, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "layout/containers/AppContainer");

  return <div className="d-flex flex-column justify-content-between vh-100"> {children} </div>;
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default AppContainer;
