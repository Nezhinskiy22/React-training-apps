import React, { Component } from "react";
import styled from "styled-components";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-extend-sd navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            Pokedex
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
