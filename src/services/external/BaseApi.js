import config from "./config.json";

class BaseApi {
  constructor() {
    this.type = "";
    this.baseUrl = config.host;
  }

  // generateRequestHeaders = () => ({
  //   method: "GET"
  // });

  generateQueryFilters = (filterObject) =>
    Object.keys(filterObject)
      .reduce((acc, key) => {
        if (filterObject[key]) {
          acc = [...acc, [key, filterObject[key]]];
        }

        return acc;
      }, [])
      .map((e) => e.join("="))
      .join("&");

  generateFullUrl = (filter) => {
    let baseUrl = `${this.baseUrl}${this.type}`;

    if (filter) {
      const queryParameters = this.generateQueryFilters(filter);
      return `${baseUrl}?${queryParameters}`;
    }

    return baseUrl;
  };

  handleResponse = (response) => response.json().then((json) => json);

  getData = (filter) => {
    const fullUrl = this.generateFullUrl(filter);
    // const requestOptions = this.generateRequestHeaders();

    // return fetch(fullUrl)
    //   .then((response) => response.json())
    //   .then((json) => json);

    return fetch(fullUrl).then((response) => this.handleResponse(response));

    // return fetch(fullUrl).then((response) => this.handleResponse(response));
  };
}

export default BaseApi;
