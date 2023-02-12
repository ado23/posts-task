import PropTypes from "prop-types";

import Navbar from "layout/navbar";
import Footer from "layout/footer";

import Container from "layout/containers/ContentConteiner";
import AppContainer from "layout/containers/AppContainer";

const MainAppContainer = ({ children, helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "layout/containers/MainAppContainer");

  return (
    <AppContainer helloFromMessage={helloFromMessage}>
      <Navbar helloFromMessage={helloFromMessage} />

      <Container helloFromMessage={helloFromMessage}>{children}</Container>

      <Footer helloFromMessage={helloFromMessage} />
    </AppContainer>
  );
};

MainAppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default MainAppContainer;
