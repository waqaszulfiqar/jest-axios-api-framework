import axios from "axios";

const apiClient = async (method, url, data = null, params = null) => {
  const config = {
    method: method,
    url: `https://reqres.in/api${url}`,
    data: data,
    params: params,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);
    return response; // Return the full response object
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export default apiClient;
