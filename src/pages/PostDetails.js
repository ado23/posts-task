import MainAppContainer from "layout/containers/MainAppContainer";

import Novi from "components/core/Post";

const PostDetails = () => {
  return (
    <MainAppContainer>
      <div className="py-3">
        <Novi />
      </div>
    </MainAppContainer>
  );
};

export default PostDetails;
