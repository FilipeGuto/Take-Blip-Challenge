const { connect, filterRepository } = require('../service');

const filterDataResponse = async (_req, res) => {
  try {
    const data = await connect();
    const response = filterRepository(data);

    res.status(200).json({ ...response });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = filterDataResponse;
