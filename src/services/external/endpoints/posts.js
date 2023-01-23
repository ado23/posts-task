import BaseApi from "services/api/BaseApi";

class Posts extends BaseApi {
  constructor() {
    super();
    this.type = "posts";
  }
}

const PostsApi = new Posts();

export default PostsApi;
