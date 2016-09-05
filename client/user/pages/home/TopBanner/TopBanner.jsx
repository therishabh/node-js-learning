import React, { PropTypes } from 'react';

import { Carousel } from 'react-bootstrap';

const TopBannerHome = () => {

  return (

    <div className="top-banner">
      <div className="slide-wrapper">
        <Carousel className="carousel-fade" interval={2000} controls={false}>
          <Carousel.Item>
            <div className="cover-image cover-image-1"></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cover-image cover-image-2"></div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <div className="cover-image cover-image-3"></div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cover-image cover-image-4"></div>
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <i className="arrow-down material-icons">keyboard_arrow_down</i>
    </div>

    );
};

export default TopBannerHome;


