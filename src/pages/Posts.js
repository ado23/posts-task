import RenderPosts from "features/Posts/components/RenderPosts";
import MainAppContainer from "layout/containers/MainAppContainer";

const PostsPage = () => (
  <MainAppContainer>
    <div className="row g-3">
      <RenderPosts />
    </div>
  </MainAppContainer>
);

export default PostsPage;
