import PropTypes from "prop-types";

import HeaderTitle from "components/typography/HeaderTitle";

const TrendingPosts = ({ title }) => (
  <div className="card text-center">
    <div className="card-header bg-dark" />

    <div className="card-body bg-light">
      <div className="d-flex justify-content-center py-2">
        <HeaderTitle className="border border-dark text-uppercase px-3 py-3" title={title} />
      </div>
    </div>

    <div className="card-footer bg-dark" />
  </div>
);

TrendingPosts.propTypes = {
  title: PropTypes.string.isRequired
};

export default TrendingPosts;
