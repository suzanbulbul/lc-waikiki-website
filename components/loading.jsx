import React from 'react';

//LottieFiles
import Lottie from 'lottie-react';
import animationData from '../public/animations/loading.json';

const Loading = () => {
  return (
    <div>
      <Lottie className='animation' animationData={animationData} />
    </div>
  );
};

export default Loading;
