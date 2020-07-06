import React, { Component } from 'react'
import PropTyoes from 'prop-types'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => (
          <li key={i}>{post.title}</li>
        ))}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTyoes.array.isRequired
}
