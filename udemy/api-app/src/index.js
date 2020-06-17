import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const search = 'cat';
const key = '0aDuUjQfzHxXgqBp27lk7kN66IEPfRiN';
const limit = 3;
const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;


axios.get(url).then(res => {
  console.log(res.data);
  const data = res.data.data;
  const imgUrl = data[0].images.downsized.url;
  console.log(imgUrl);
  const img = document.createElement('img');
  img.src = imgUrl;
  document.body.appendChild(img);
})

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);
