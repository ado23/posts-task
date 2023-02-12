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

export default MainAppContainer;
