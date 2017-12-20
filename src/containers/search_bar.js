import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    return (
      <form onSubmit={e=> this.onFormSubmit(e)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities of US."
          className="form-control"
          value={this.state.term}
          onChange={e => this.onInputChange(e)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default connect(null, actions)(SearchBar);
