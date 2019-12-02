const axios = require('axios')

module.exports = {
  async get(req, res, next) {
    try {
      const response = await axios.get(`https://www.formstack.com/api/v2/form/3634968.json?oauth_token=720106c7a6217516f9ed110fd31a5fca`);
      return res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
};
