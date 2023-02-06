import MainAppContainer from "layout/containers/MainAppContainer";
import images from "assets/images";
import styled from "styled-components";

const Novi = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${images.news});
  // filter: sepia(100%) saturate(200%) brightness(70%) hue-rotate(330deg);
  filter: brightness(70%);
`;

const HomePage = () => {
  console.log("asdads");
  return (
    <div>
      <Novi />
      <p>sdas</p>
    </div>
  );
};

export default HomePage;
