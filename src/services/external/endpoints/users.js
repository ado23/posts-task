import BaseApi from "services/external/BaseApi";

class Users extends BaseApi {
  constructor() {
    super();
    this.type = "users";
  }

  getUsers = () => this.apiCall({ url: this.generateFullUrl(false) });
}

const UsersApi = new Users();

export default UsersApi;
