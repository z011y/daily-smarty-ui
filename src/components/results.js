import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import ResultsPosts from "./results-posts";

import { connect } from "react-redux";
import * as actions from "../actions";

class Results extends Component {
  constructor() {
    super();
  }

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Results);
