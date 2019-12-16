import React, { Component } from "react";

import { connect } from "react-redux";

class ResultsPosts extends Component {
  render() {
    return (
      <div className="results-posts">
        <ul className="results-posts-wrapper">
          <div className="results-posts-posts">Results go here</div>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(ResultsPosts);
