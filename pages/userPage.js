import axios from "axios";
class userPage {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // Method to create a new user
  async createUser(userData) {
    // Convert unexpected data formats to strings
    // const formattedData = {
    //   name: String(userData.name),
    //   job: String(userData.job),
    // };
    const response = await this.apiClient("post", "/users", userData);
    return response;
  }

  // Method to retrieve a list of users
  async getUsers(params) {
    const response = await this.apiClient("get", "/users", params);
    return response;
  }

  // Method to update an existing user
  async updateUser(userId, userData) {
    const response = await this.apiClient("put", `/users/${userId}`, userData);
    return response;
  }

  // Method to delete a user by ID
  async deleteUser(userId) {
    const config = {
      method: "delete",
      url: `https://reqres.in/api/users/${userId}`,
    };

    try {
      const response = await axios.request(config);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default userPage;
