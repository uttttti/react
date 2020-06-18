import React from 'react';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: ''};
	}
	
	render() {
    return (
      <div>
        <h2>Find Your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="search!" />
        </form>
      </div>
    );
	}
	handleChange = e => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.title);
    this.setState({ title: '' });
	};
}
