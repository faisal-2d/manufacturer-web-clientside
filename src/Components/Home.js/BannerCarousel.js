import React from 'react';
import banner from '../../assets/bannerImg1.png'

const BannerCarousel = () => {
    return (
        <div>
            <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner} />
  </div>
</div>
        </div>
    );
};

export default BannerCarousel;