import handleError from "utils/handleError";
import CommentsApi from "services/external/endpoints/comments";

const getCommentsApi = (setData) =>
  CommentsApi.getComments()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getCommentsApi;
