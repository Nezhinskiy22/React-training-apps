import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Vitaliy Nezhinskiy</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              sint ratione quia nemo. Odit, rerum dicta. Doloribus atque
              officiis saepe illum, suscipit ipsum vero inventore ratione
              aspernatur vitae nisi! Nobis.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <a href="tel:+380979124210">+38-097-912-42-10</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-github" aria-hidden="true" />
                    <a href="https://github.com/Nezhinskiy22" target="_blank">
                      View my GitHub page
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/vitaliy-nezhinskiy-143640137/"
                      target="_blank"
                    >
                      View my Linkedin profile
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
