import React from 'react';
import Lottie from 'lottie-react';
import comingSoon from '../public/animations/coming-soon.json';

const Comingsoon = () => {
  return (
    <div className='comingsoon'>
      <Lottie className='animation' animationData={comingSoon} />
    </div>
  );
};

export default Comingsoon;
