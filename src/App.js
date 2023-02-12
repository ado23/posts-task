import { ThemeProvider } from "styled-components";

import theme from "theme";
import Main from "features/Main";

import Routes from "routes";

const App = () => {
  const helloFromMessage = "Hello from";
  console.log(`${helloFromMessage}`, "App");

  return (
    <ThemeProvider theme={theme}>
      <Main helloFromMessage={helloFromMessage}>
        <Routes helloFromMessage={helloFromMessage} />
      </Main>
    </ThemeProvider>
  );
};

export default App;
