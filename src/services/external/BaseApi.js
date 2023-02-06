import config from "./config.json";

class BaseApi {
  constructor() {
    this.type = "";
    this.baseUrl = config.host;
  }

  /**
   * This method generates base url for getting data
   * @returns Base url
   */
  generateBaseUrl = () => `${this.baseUrl}${this.type}`;

  /**
   * This method adds additional layer of filtering if needed
   * @param {string} filter -> additional filtering of endpoint by some data
   * @returns Full url
   */
  generateFullUrl = (filter) => {
    let baseUrl = `${this.baseUrl}${this.type}`;

    if (filter) return `${baseUrl}${filter}`;

    return baseUrl;
  };

  /**
   * This method handles response that we get from the api
   * @param {Object} response
   * @returns response object
   */
  handleResponse = (response) => response.json().then((json) => json);

  /**
   * This method is first in que when calling external api
   * @param {String} url -> url on what to call endpoint
   * @returns
   */
  apiCall = ({ url }) => fetch(url).then((response) => this.handleResponse(response));
}

export default BaseApi;
