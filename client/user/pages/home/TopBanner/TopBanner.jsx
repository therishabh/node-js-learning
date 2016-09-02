import React, {PropTypes} from 'react';
import {Carousel} from 'react-responsive-carousel';

const TopBannerHome = () => {

  return (

  	<Carousel showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src="/core/images/home/cover-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/core/images/home/cover-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/core/images/home/cover-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/core/images/home/cover-4.jpg" />
                </div>
            </Carousel>

  );
};

export default TopBannerHome;
