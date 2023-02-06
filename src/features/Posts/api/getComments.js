import handleError from "utils/handleError";
import CommentsApi from "services/external/endpoints/comments";

const getComments = (setData) =>
  CommentsApi.getData()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getComments;
