import BaseApi from "services/external/BaseApi";

class Posts extends BaseApi {
  constructor() {
    super();
    this.type = "posts";
  }

  getPosts = () => this.apiCall({ url: this.generateFullUrl(false) });
  getPost = (postId) => this.apiCall({ url: this.generateFullUrl(`/${postId}`) });
  getPostComments = (postId) => this.apiCall({ url: this.generateFullUrl(`/${postId}/comments`) });
}

const PostsApi = new Posts();

export default PostsApi;
