import axios from 'axios';

const giphyApi = word => {
  const search = word;
  const key = "0aDuUjQfzHxXgqBp27lk7kN66IEPfRiN";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyApi;
