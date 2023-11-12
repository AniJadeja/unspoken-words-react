import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import Waves from './waves.json'

const LottieAnimation = () => {
  const animationContainer = useRef(null);
  let animationInstance = null;

  useEffect(() => {
    animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      animationData: Waves, // Replace with your animation data
    });

    animationInstance.setSpeed(0.1); // Set the speed to 2x
  }, []);

  return (
    <div ref={animationContainer} ></div>
  );
};

export default LottieAnimation;