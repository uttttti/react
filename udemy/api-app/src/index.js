import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Search } from "./component/Search";
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }

  render() {
    return <div>
      <Search search={this.giphyApi} />
      {this.renderImageList(this.state.gifUrlList)}
    </div>;
  }

  giphyApi = target => {
    const search = target;
    const key = '0aDuUjQfzHxXgqBp27lk7kN66IEPfRiN';
    const limit = 50;
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    axios.get(url).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      this.setState({ gifUrlList: imageUrlList });
    });
  }

  renderImageList(list) {
    const imageList = list.map((url, index) => {
      return (
        <li className="item" key={index}>
          <img className="image" src={url} alt='giphy'/>
        </li>
      );
    });
    return <ul className="list">{imageList}</ul>;
  }
}

render(<App />, document.getElementById('root'));
