import BaseApi from "services/api/BaseApi";

class Comments extends BaseApi {
  constructor() {
    super();
    this.type = "comments";
  }
}

const CommentsApi = new Comments();

export default CommentsApi;
