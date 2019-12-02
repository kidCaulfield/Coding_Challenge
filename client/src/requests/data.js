const BASE_URL = 'http://localhost:5000';

module.exports = {
  async get() {
    const res = await fetch(`${BASE_URL}/api/data`, {
      credentials: 'include'
    })
    return res.json();
  }
}