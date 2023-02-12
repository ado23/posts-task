import PropTypes from "prop-types";

import SmallText from "components/typography/SmallText";

const ProjectName = ({ text, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "layout/footer/components/ProjectName");

  return <SmallText helloFromMessage={helloFromMessage} text={text} />;
};

ProjectName.propTypes = {
  text: PropTypes.string.isRequired
};

export default ProjectName;
