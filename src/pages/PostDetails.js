import Details from "features/PostDetails/components/Details";

const PostDetailsPage = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "pages/PostDetails");

  return <Details helloFromMessage={helloFromMessage} />;
};

export default PostDetailsPage;
