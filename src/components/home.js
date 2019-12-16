import React, { Component } from "react";

import Logo from "./logo.js";
import SearchBar from "./search-bar.js";
import RecentPosts from "./recent-posts.js";

export default class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log("trying to handle submit for query", query);
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
