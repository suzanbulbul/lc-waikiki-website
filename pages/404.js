import React from 'react';

//LottieFiles
import Lottie from 'lottie-react';
import notFound from '../public/animations/not-found.json';


const Custom404 = () => {
  return (
    <div className='not-found'>
      <Lottie className='animation' animationData={notFound} />
    </div>
  );
};

export default Custom404;

  