const axios = require('axios');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function postData(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchData, postData };
