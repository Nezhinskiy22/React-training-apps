import React, { Component } from "react";
import { Nav, Container, Row, Col, Tab } from "react-bootstrap";

export class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Technologies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Frameworks</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="first">
                  <img src="https://nzstudytrips.ru/wp-content/uploads/2019/02/Web-design-and-Development-1024x373.jpg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, obcaecati facere. Consequuntur culpa natus ea
                    dignissimos exercitationem, non temporibus voluptatibus
                    aspernatur id architecto? Nostrum, corporis.
                  </p>
                </Tab.Pane>{" "}
                <Tab.Pane eventKey="second">
                  <img src="https://sapient.pro/wp-content/uploads/2019/09/il_1-3.svg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, obcaecati facere. Consequuntur culpa natus ea
                    dignissimos exercitationem, non temporibus voluptatibus
                    aspernatur id architecto? Nostrum, corporis.
                  </p>
                </Tab.Pane>{" "}
                <Tab.Pane eventKey="third">
                  <img src="https://lh3.googleusercontent.com/proxy/8bRd382p8gabeEPWFXiSU0JOGCGW6lEX7ohdLnEG65sWSVRiw_dlp8UMG1vMSbRXmtDEl_qRVdm8I5_UY6UIlqUyvXFnfs5YhHdDzpBywA5Y" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, obcaecati facere. Consequuntur culpa natus ea
                    dignissimos exercitationem, non temporibus voluptatibus
                    aspernatur id architecto? Nostrum, corporis.
                  </p>
                </Tab.Pane>{" "}
                <Tab.Pane eventKey="fourth">
                  <img src="https://lh3.googleusercontent.com/proxy/8bRd382p8gabeEPWFXiSU0JOGCGW6lEX7ohdLnEG65sWSVRiw_dlp8UMG1vMSbRXmtDEl_qRVdm8I5_UY6UIlqUyvXFnfs5YhHdDzpBywA5Y" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, obcaecati facere. Consequuntur culpa natus ea
                    dignissimos exercitationem, non temporibus voluptatibus
                    aspernatur id architecto? Nostrum, corporis.
                  </p>
                </Tab.Pane>{" "}
                <Tab.Pane eventKey="fifth">
                  <img src="https://www.scnsoft.com/blog-pictures/web-apps/web_application_framework-01.png" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, obcaecati facere. Consequuntur culpa natus ea
                    dignissimos exercitationem, non temporibus voluptatibus
                    aspernatur id architecto? Nostrum, corporis.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
export default About;
