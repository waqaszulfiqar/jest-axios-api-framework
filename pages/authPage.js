import apiClient from "../utils/apiClient";

class authPage {
  constructor() {
    this.apiClient = apiClient;
    this.loginEndpoint = "/login";
  }

  // Method to log in a user with provided credentials
  async login(credentials) {
    return await this.apiClient("post", this.loginEndpoint, credentials);
  }
}

export default authPage;
