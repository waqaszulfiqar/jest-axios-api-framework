import axios from "axios";

const apiClient = async (method, url, data = null, params = null) => {
  // Configuration object for the axios request
  const config = {
    method: method,
    url: `https://reqres.in/api${url}`, // Base URL with endpoint
    data: data,
    params: params,
    headers: {
      "Content-Type": "application/json", // Set content type to JSON
    },
  };

  try {
    // Make the HTTP request using axios
    const response = await axios(config);
    return response; // Return the full response object
  } catch (error) {
    // Throw the error response data or error message
    throw error.response ? error.response.data : error.message;
  }
};

export default apiClient;
