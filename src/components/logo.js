import React, { Component } from "react";

export default class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105
    };
    return (
      <div className="logo-main">
        <img
          style={size}
          src="/assets/ds_circle_logo.png"
          alt="daily smarty image logo big"
        />
      </div>
    );
  }
}
