import React, { Component } from "react";

class Post extends Component {
  render() {
    return <li key="index">{this.props.post.title}</li>;
  }
}

export default Post;
