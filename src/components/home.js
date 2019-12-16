import React, { Component } from "react";

import Logo from "./logo.js";
import SearchBar from "./search-bar.js";
import RecentPosts from "./recent-posts.js";

import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className="app">
        <Logo />
        <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Home);
