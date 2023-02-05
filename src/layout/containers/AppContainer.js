import styled from "styled-components";

const AppContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.appBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AppContainer;
