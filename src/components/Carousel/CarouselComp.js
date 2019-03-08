import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

const CarouselComp = () => (
    <div>
        <Carousel>
            <Carousel.Item>
                <img 
                className="carousel-image"
                src="./images/internal.jpg"
                alt="first slide"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>easy on me</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="carousel-image"
                    src="./images/external.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                        <p>easy on me slide 2</p>
                    </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="carousel-image"
                    src="./images/external.jpg"
                    alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>third Slide</h3>
                        <p>easy on me slide 3</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default CarouselComp;