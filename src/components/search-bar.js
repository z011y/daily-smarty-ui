import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class SearchBar extends Component {
  constructor() {
    super();
  }

  handleFormSubmit = function({ query }) {
    console.log("trying to handle submit for query", query);
    //navigate to new route
  };

  renderInput(field) {
    return (
      <input type="text" placeholder="Search DailySmarty" {...field.input} />
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="search-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.renderInput} />
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: "searchBar"
})(SearchBar);
export default SearchBar;
