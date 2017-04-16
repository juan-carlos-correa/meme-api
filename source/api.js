import fetch from 'isomorphic-fetch';

const baseUrl= 'https://api.imgflip.com';

const api = {
  memes: {
    async getMemes() {
      const response = await fetch(`${baseUrl}/get_memes`);
      const data = await response.json();
      return data;
    }
  }
}

export default api;
