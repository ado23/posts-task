import handleError from "utils/handleError";
import PostsApi from "services/external/endpoints/posts";

const getPosts = (setData) =>
  PostsApi.getData()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getPosts;
