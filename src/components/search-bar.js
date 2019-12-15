import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input placeholder="Search Daily Smarty" />
      </form>
    );
  }
}
