import React, { Component } from "react";

class Post extends Component {
  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
    return topics;
  }
  render() {
    return (
      <li className="recent-post">
        <div className="recent-post-title">{this.props.title}</div>
        <div className="recent-post-topics">{this.renderTopics()}</div>
      </li>
    );
  }
}

export default Post;
