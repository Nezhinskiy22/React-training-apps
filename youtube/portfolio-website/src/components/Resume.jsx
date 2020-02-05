import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://image.flaticon.com/icons/svg/147/147144.svg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Vitaliy Nezhinskiy</h2>
            <h4 style={{ color: "gray" }}>Front-end developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              laboriosam quae perspiciatis harum iure! Quam laboriosam culpa
              quaerat blanditiis libero cum rerum possimus doloribus ducimus et
              assumenda, iste labore ad quo enim incidunt aliquid, eum, sint
              quas in molestiae quis?
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address:</h5>
            <p>1 Hacker way Menlo Park, 94025</p>
            <h5>Phone:</h5>
            <p>(123) 456-78-90</p>
            <h5>E-mail:</h5>
            <p>someone@example.com</p>
            <h5>Web:</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <Education
              startYear={2000}
              endYear={2008}
              schoolName="My School"
              schoolDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, iure!"
            />
            <Education
              startYear={2008}
              endYear={2014}
              schoolName="My University"
              schoolDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, iure!"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience:</h2>
            <Experience
              startYear={2014}
              endYear="2017"
              jobName="Front-end developer"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing."
            />
            <Experience
              startYear={2017}
              endYear="till now"
              jobName="Second job"
              jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills:</h2>
            <Skills skill="HTML/CSS" progress={80} />{" "}
            <Skills skill="Bootstrap" progress={60} />
            <Skills skill="JavaScript" progress={60} />
            <Skills skill="React" progress={22} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
