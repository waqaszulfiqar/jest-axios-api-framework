## API Framework using Jest and Axios

### About

- **API** - This framework is developed using **Jest** and **Axios** libraries.
- Jest is a delightful JavaScript Testing Framework with a focus on simplicity
- Axios is a promise-based HTTP client for the browser and Node.js.

```
JEST-AXIOS-API
│   ├── pages
│   │   ├── authPage.js       # Contains methods for authentication-related API interactions
│   │   ├── userPage.js       # Contains methods for user-related API interactions
│   ├── tests
│   │   ├── auth.test.js      # Test cases for authentication functionality
│   │   ├── user.test.js      # Test cases for user-related functionalities
│   ├── utils
│   │   ├── apiClient.js      # Configures and sends HTTP requests using Axios
│   ├── testdata              # Contains test data for the API tests
│   └── babel                 # Contains Babel configuration for Jest
├── package.json              # npm configuration file
├── jest.config.js            # Jest configuration file
└── README.md                 # Project documentation
```

### Page Objects

- This framework is strictly written using page-object design pattern. https://martinfowler.com/bliki/PageObject.html

### Pre-requisites

1. NodeJS installed globally in the system. https://nodejs.org/en/download/
2. Jest
3. Axios
4. Set **NodeJS** paths correctly in the system.
5. Text Editor/IDE (Optional) installed-->Sublime/VIM/Visual Studio Code/Brackets. your own choice

### Setup Scripts

- Clone the repository into a folder
- Go inside the folder and run following command from terminal/command prompt

```
npm install
```

- All the dependencies from package.json would be installed in node_modules folder.

### Run Tests

To execute the test suite, run the following command:

```bash
npm test
```

Commands are set in `package.json` internally

### Reports

- TBD

### CI/CD

- TBD

## Test Scenarios

### Authentication Tests

- **Positive Tests:**
  - Successful login with valid credentials.
- **Negative Tests:**
  - Login attempt with invalid credentials.
  - Login attempt with missing fields.
  - Login attempt with incorrect password.
  - Login attempt with incorrect username.
  - Login attempt with large payload.
  - Login attempt with wrong format data.

### User Tests

- **Positive Tests:**

  - Create a user with valid data.
  - Retrieve a users.
  - Update user information.
  - Delete a user.

- **Negative Tests:**
  - Attempt to create a user with invalid data.
  - Attempt to create a user with empty fields.
  - Attempt to create a user with large payload.
  - Attempt to create a user with wrong data format.
  - Attempt to update a user with invalid data.
  - Attempt to update a user with empty fields.
  - Attempt to update a user with large payload.
  - Attempt to update a user with wrong data format.
