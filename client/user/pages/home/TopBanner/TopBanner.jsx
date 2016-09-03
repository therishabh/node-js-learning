import React, {PropTypes} from 'react';

import {Carousel} from 'react-bootstrap';

const TopBannerHome = () => {

  return (

    <div className="top-banner">
    <div className="slide-wrapper">
        <Carousel>
    <Carousel.Item>
      <img src="/core/images/home/cover-1.jpg" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="/core/images/home/cover-2.jpg" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src="/core/images/home/cover-3.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
     <Carousel.Item>
     <img src="/core/images/home/cover-4.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
    </div>

  );
};

export default TopBannerHome;


