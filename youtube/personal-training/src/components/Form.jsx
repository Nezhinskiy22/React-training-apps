import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  error = () => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please enter city and country
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div>{this.props.error ? this.error() : null}</div>
        <form onSubmit={this.props.loadweather}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="City"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 ">
              <input
                type="text"
                className="form-control"
                name="country"
                placeholder="Country"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 mt-md-0 py-2 text-md-left">
              <button className="btn btn-warning">Get weather</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
