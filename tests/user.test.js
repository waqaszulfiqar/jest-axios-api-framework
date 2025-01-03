import UserPage from "../pages/userPage";
import apiClient from "../utils/apiClient";
import testData from "../utils/data";

describe("User API Tests", () => {
  let createdUserId;
  const userPage = new UserPage(apiClient);

  it("Should retrieve a list of users on page 2", async () => {
    const response = await userPage.getUsers(2);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("page", 2);
    expect(response.data).toHaveProperty("per_page");
    expect(response.data).toHaveProperty("data");
    response.data.data.forEach((user) => {
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("first_name");
      expect(user).toHaveProperty("last_name");
    });
  });

  it("Should create a new user", async () => {
    const response = await userPage.createUser(testData.users.create);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(response.data).toHaveProperty("createdAt");
    expect(response.data.name).toBe(testData.users.create.name);
    expect(response.data.job).toBe(testData.users.create.job);
    createdUserId = response.data.id;
  });

  it("Should update the created user", async () => {
    const response = await userPage.updateUser(
      createdUserId,
      testData.users.update
    );
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(testData.users.update.name);
    expect(response.data.job).toBe(testData.users.update.job);
  });

  it("Should delete the user with id=2", async () => {
    const response = await userPage.deleteUser(testData.users.delete.id);
    expect(response.status).toBe(204);
  });

  it("Should return error for invalid credentials", async () => {
    try {
      await userPage.createUser(testData.login.invalid);
    } catch (error) {
      expect(error).toHaveProperty("error");
    }
  });

  it("Should return error for missing fields", async () => {
    try {
      await userPage.createUser({});
    } catch (error) {
      expect(error).toHaveProperty("error");
    }
  });

  // **BUG:** - Should throw proper error for the large payload but getting Undefined error

  it("Should handle very large payloads", async () => {
    const response = await userPage.createUser(
      testData.login.boundary.largePayload
    );
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(testData.login.boundary.largePayload.email);
    expect(response.data.job).toBe(
      testData.login.boundary.largePayload.password
    );
  });

  // **BUG:** - No proper error for wrong format. Getting Undefined error

  it("Should handle unexpected data formats", async () => {
    const response = await userPage.createUser(
      testData.login.boundary.wrongFormat
    );
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(testData.login.boundary.wrongFormat.email);
    expect(response.data.job).toBe(
      testData.login.boundary.wrongFormat.password
    );
  });

  it("Should return error for invalid data", async () => {
    try {
      await userPage.updateUser(createdUserId, testData.login.invalid);
    } catch (error) {
      expect(error).toHaveProperty("error");
    }
  });

  it("Should return error for empty fields", async () => {
    try {
      await userPage.updateUser(createdUserId, {});
    } catch (error) {
      expect(error).toHaveProperty("error");
    }
  });

  // **BUG:** - Should throw proper error for the large payload but getting Undefined error

  it("Should handle very large payloads", async () => {
    const response = await userPage.updateUser(
      createdUserId,
      testData.login.boundary.largePayload
    );
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(testData.login.boundary.largePayload.email);
    expect(response.data.job).toBe(
      testData.login.boundary.largePayload.password
    );
  });

  // **BUG:** - No proper error for wrong format. Getting Undefined error

  it("Should handle unexpected data formats", async () => {
    const response = await userPage.updateUser(
      createdUserId,
      testData.login.boundary.wrongFormat
    );
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(testData.login.boundary.wrongFormat.email);
    expect(response.data.job).toBe(
      testData.login.boundary.wrongFormat.password
    );
  });
});
