import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: ''};
	}
	
	render() {
    const { buttonText } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
  
	handleChange = e => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  handleSubmit = e => {
    const { getUrls } = this.props;
    e.preventDefault();
    getUrls(this.state.title);
    this.setState({ title: '' });
	};
}

export default Search;
