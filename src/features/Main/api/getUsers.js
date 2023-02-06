import handleError from "utils/handleError";
import UsersApi from "services/external/endpoints/users";

const getUsersApi = (setData) =>
  UsersApi.getUsers()
    .then((result) => setData(result))
    .catch((e) => handleError(e));

export default getUsersApi;
