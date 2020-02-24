import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import cheese1 from "./aged-cheese-close-up-dairy-product-277276.jpg";
import cheese2 from "./sliced-cheese-on-brown-table-top-821365.jpg";
import CarouselCaption from "react-bootstrap/CarouselCaption";

export class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={cheese1} alt="cheese" />
          <CarouselCaption>
            <h3>Cheese image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, unde.
            </p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={cheese2} alt="cheese" />
          <CarouselCaption>
            <h3>Cheese image 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, unde.
            </p>
          </CarouselCaption>
        </CarouselItem>{" "}
        <CarouselItem>
          <img className="d-block w-100" src={cheese1} alt="cheese" />
          <CarouselCaption>
            <h3>Cheese image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, unde.
            </p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    );
  }
}

export default CarouselBox;
