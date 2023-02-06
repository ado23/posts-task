import handleError from "utils/handleError";
import PostsApi from "services/external/endpoints/posts";

const getPostComments = (setData, postId) =>
  PostsApi.getPostComments(postId)
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getPostComments;
