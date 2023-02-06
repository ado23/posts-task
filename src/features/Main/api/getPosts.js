import handleError from "utils/handleError";
import PostsApi from "services/external/endpoints/posts";

const getPostsApi = (setData) =>
  PostsApi.getPosts()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getPostsApi;
