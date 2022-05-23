import React from 'react';
import banner from '../../assets/bannerImg1.png'

const Banner = () => {
    return (
        <div>
           <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-md rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Get All <span className='text-primary'>Electric Tools!</span></h1>
      <p className="py-6">We are supplying all essential electric tools and accesories at reasonable price! Our producrts are lite-weight, durable and long lasting! Get your tool now </p>
      <button className="btn btn-primary">explore now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;