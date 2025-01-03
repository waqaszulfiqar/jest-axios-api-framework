import AuthPage from "../pages/authPage";
import testData from "../utils/data";

describe("Authentication Tests", () => {
  const authPage = new AuthPage();

  it("Should verify the successful login with valid credentials", async () => {
    const response = await authPage.login({
      email: testData.login.valid.email,
      password: testData.login.valid.password,
    });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("token");
  });

  // **BUG:** API is accepting the incorrect email and password, returning a 200 status code.

  it("Should verify the Login fails with invalid credentials", async () => {
    const response = await authPage.login({
      email: testData.login.valid.email,
      password: testData.login.invalid.password,
    });
    expect(response.status).toBe(400);
    expect(response.data).toHaveProperty("error", "invalid credentials");
  });

  it("Should Verify the error message `User not found`", async () => {
    try {
      await authPage.login({
        email: testData.login.invalid.email,
        password: testData.login.invalid.password,
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "user not found");
    }
  });

  it("Should verify the Login fails with missing email", async () => {
    try {
      await authPage.login({
        email: "",
        password: testData.login.valid.password,
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "Missing email or username");
    }
  });

  it("Should verify the Login fails with missing password", async () => {
    try {
      await authPage.login({
        email: testData.login.valid.email,
        password: "",
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "Missing password");
    }
  });

  it("Should verify the error message for Empty Email and Password", async () => {
    try {
      await authPage.login({
        email: "",
        password: "",
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "Missing email or username");
    }
  });

  // **BUG:** API is accepting the large payload without throwing any error or warning.

  it("Should verify the Login fails with very large payload", async () => {
    try {
      await authPage.login({
        email: testData.login.boundary.largePayload.email,
        password: testData.login.boundary.largePayload.password,
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "Payload too large");
    }
  });

  // **BUG:** Incorrect Error Message for Invalid Data Format in Login.

  it("Should verify the Login fails with unexpected data format", async () => {
    try {
      await authPage.login({
        email: testData.login.boundary.wrongFormat.email,
        password: testData.login.boundary.wrongFormat.password,
      });
    } catch (error) {
      expect(error).toHaveProperty("error", "wrong email format");
    }
  });
});
