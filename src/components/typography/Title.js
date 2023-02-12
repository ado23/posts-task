import PropTypes from "prop-types";

const Title = ({ title, className }) => <h5 className={className}>{title}</h5>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Title;
