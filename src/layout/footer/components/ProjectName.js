import PropTypes from "prop-types";

import SmallText from "components/typography/SmallText";

const ProjectName = ({ text }) => <SmallText text={text} />;

ProjectName.propTypes = {
  text: PropTypes.string.isRequired
};

export default ProjectName;
