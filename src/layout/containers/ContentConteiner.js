import styled from "styled-components";

const StyledContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.appBackground};
`;

const Container = ({ children }) => <StyledContainer className="container pt-5"> {children} </StyledContainer>;

export default Container;
