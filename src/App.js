import { ThemeProvider } from "styled-components";

import theme from "theme";
import Main from "features/Main";

import Routes from "routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Routes />
    </Main>
  </ThemeProvider>
);

export default App;
