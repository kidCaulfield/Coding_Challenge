module.exports = {
  async get(req, res, next) {
    try {
      const response = fetch(`https://www.formstack.com/api/v2/submission/551042206.json?oauth_token=720106c7a6217516f9ed110fd31a5fca`);
      console.log('response: ', response.data);
    } catch (error) {
      console.error(error);
    }
  }
};
