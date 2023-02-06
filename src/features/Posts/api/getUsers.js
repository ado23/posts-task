import handleError from "utils/handleError";
import UsersApi from "services/external/endpoints/users";

const getUsers = (setData) =>
  UsersApi.getData()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getUsers;
