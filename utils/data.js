const testData = {
  login: {
    valid: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    invalid: {
      email: "hellowordl@test.com",
      password: "wrongpassword",
    },
    boundary: {
      largePayload: {
        email: "a".repeat(1000) + "@test.com",
        password: "a".repeat(1000),
      },
      wrongFormat: {
        email: "12345###^^*^",
        password: "584650753#*%&)$(*&%R*$(*&*EWR&*",
      },
    },
  },
  users: {
    list: {
      page: 2,
    },
    create: {
      name: "morpheus",
      job: "leader",
    },
    update: {
      name: "morpheus",
      job: "zion resident",
    },
    delete: {
      id: 2,
    },
  },
};

export default testData;
