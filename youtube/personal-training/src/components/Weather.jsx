import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  minmaxTemp = (min, max) => {
    if (min && max) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  };

  render() {
    return (
      <div className="container text-light">
        <div className="cards pt-4">
          <h1>{this.props.city}</h1>
          <h5 className="py-4">
            <i className={`wi ${this.props.weatherIcon} display-1`} />
          </h5>
          {this.props.celsius ? (
            <h1 className="py-2">{this.props.celsius}&deg;</h1>
          ) : null}
          {/**show max and min temperature */}
          {this.minmaxTemp(this.props.temp_min, this.props.temp_max)}
          <h4 className="py-3">{this.props.description}</h4>
        </div>
      </div>
    );
  }
}

export default Weather;
