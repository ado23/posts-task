import BaseApi from "services/external/BaseApi";

class Comments extends BaseApi {
  constructor() {
    super();
    this.type = "comments";
  }

  getComments = () => this.apiCall({ url: this.generateFullUrl(false) });
  getPostComments = (postId) => this.apiCall({ url: this.generateFullUrl(`?/postId=${postId}`) });
}

const CommentsApi = new Comments();

export default CommentsApi;
