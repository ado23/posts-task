import handleError from "utils/handleError";
import PostsApi from "services/external/endpoints/posts";

const getPost = (setData, postId) =>
  PostsApi.getPost(postId)
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getPost;
