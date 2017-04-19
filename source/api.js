import fetch from 'isomorphic-fetch';

const baseUrl= 'http://version1.api.memegenerator.net/';

const api = {
  memes: {
    async getMemes(page = 1) {
      const response = await fetch(`${baseUrl}/Generators_Select_ByPopular?pageIndex=${page}&pageSize=12&days=&apiKey=demo`);
      const data = await response.json();
      return data;
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/Generator_Select_ByUrlNameOrGeneratorID?generatorID=${id}&urlName=null&apiKey=demo`);
      const data = await response.json();
      return data;
    },
  }
}

export default api;
