const axios = require('axios');

const BASE_URL = 'https://api.github.com/orgs/takenet';

const getData = async () => {
  const { data } = await axios.get(`${BASE_URL}/repos?per_page=100&sort=created&direction=asc`);

  return data;
}

module.exports = getData;
