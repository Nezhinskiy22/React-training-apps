import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  My Portfolio
                </Link>
              }
              scroll
            >
              <Navigation>
                <a href="/">Home</a>
                <a href="/resume">Resume</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                  My Portfolio
                </Link>
              }
            >
              <Navigation>
                <a href="/">Home</a>
                <a href="/resume">Resume</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
