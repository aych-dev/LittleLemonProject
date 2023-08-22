import React from 'react';
import BannerImage from '../Images/Asset 16@4x.png';

function Banner() {
  return (
    <section id='banner'>
      <img
        src={BannerImage}
        alt='Little Lemon Banner'
        className='banner-image'
      />
    </section>
  );
}

export default Banner;
