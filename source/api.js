import fetch from 'isomorphic-fetch';

const baseUrl= 'http://version1.api.memegenerator.net/';

const api = {
  memes: {
    async getMemes() {
      const response = await fetch(`${baseUrl}/Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo`);
      const data = await response.json();
      return data;
    }
  }
}

export default api;
