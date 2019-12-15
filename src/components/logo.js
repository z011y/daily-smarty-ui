import React, { Component } from "react";

export default class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="logo-main">
        <img
          src="/assets/ds_circle_logo.png"
          alt="daily smarty image logo big"
        />
      </div>
    );
  }
}
