import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>
          <ul className="recent-posts-posts">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(RecentPosts);
