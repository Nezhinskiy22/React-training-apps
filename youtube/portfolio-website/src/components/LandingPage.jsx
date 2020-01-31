import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Junior Front-end Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | JavaScript | React</p>
              <div className="social-links">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-free-code-camp" aria-hidden="true" />
                </a>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
