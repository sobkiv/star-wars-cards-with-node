import axios from 'axios';
class Service {
  getComponent = async (category, counter) => {
    return await axios
      .get(`https://swapi.dev/api/${category}/${counter}`)
      .then(res => res)
      .catch(err => err);
  };
}

export const FetchService = new Service();
