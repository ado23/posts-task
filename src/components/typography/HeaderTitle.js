import PropTypes from "prop-types";

const HeaderTitle = ({ title, className }) => <h3 className={className}>{title}</h3>;

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HeaderTitle;
