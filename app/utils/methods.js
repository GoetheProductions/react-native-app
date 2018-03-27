export default class api {
  handleError(method, error, url) {
    return `METHOD: ${method} got ERROR: ${error} on URL: ${url}`;
  }

  async GET(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return this.handleError('GET', error, url);
    }
  }
}
