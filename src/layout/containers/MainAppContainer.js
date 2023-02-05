import Navbar from "layout/navbar";
import Footer from "layout/footer";
import Container from "layout/containers/ContentConteiner";
import AppContainer from "layout/containers/AppContainer";

const MainAppContainer = ({ children }) => (
  <div className="d-flex flex-column h-100">
    <AppContainer>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </AppContainer>
  </div>
);

export default MainAppContainer;
