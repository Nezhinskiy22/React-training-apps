import React, { Component } from "react";
import { Container, Row, Col, Media, ListGroup, Card } from "react-bootstrap";

export class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={180}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem, cum similique possimus, fugiat eligendi
                  perspiciatis quis inventore nam enim aut repellendus. Ducimus
                  dolore commodi corrupti magni repellendus fuga vero!
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={180}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem, cum similique possimus, fugiat eligendi
                  perspiciatis quis inventore nam enim aut repellendus. Ducimus
                  dolore commodi corrupti magni repellendus fuga vero!
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={180}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem, cum similique possimus, fugiat eligendi
                  perspiciatis quis inventore nam enim aut repellendus. Ducimus
                  dolore commodi corrupti magni repellendus fuga vero!
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  ullam aliquam reiciendis molestiae ducimus sunt sed in
                  suscipit deserunt hic?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blog;
