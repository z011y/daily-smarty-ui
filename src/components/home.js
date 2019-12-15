import React, { Component } from "react";

import Logo from "./logo.js";
import SearchBar from "./search-bar.js";
import RecentPosts from "./recent-posts.js";

export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    );
  }
}
