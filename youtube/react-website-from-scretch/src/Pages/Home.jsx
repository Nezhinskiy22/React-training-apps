import React, { Component } from "react";
import { CarouselBox } from "./../assets/CarouselBox";
import { Container, CardDeck, Card, CardBody, Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CarouselBox />
        <Container>
          <h2 className="text-center m4">Our team</h2>
          <CardDeck className="m-4">
            <Card bg="light" border="success" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  dolorem libero illo.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  dolorem libero illo.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  dolorem libero illo.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
