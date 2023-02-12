import PropTypes from "prop-types";

import Navbar from "layout/navbar";
import Footer from "layout/footer";

import Container from "layout/containers/ContentConteiner";
import AppContainer from "layout/containers/AppContainer";

const MainAppContainer = ({ children }) => (
  <AppContainer>
    <Navbar />

    <Container>{children}</Container>

    <Footer />
  </AppContainer>
);

MainAppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default MainAppContainer;
