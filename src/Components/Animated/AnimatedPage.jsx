// AnimatedPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const forwardAnimation = {
  initial: { x: 100 },
  animate: { x: 0 },
  exit: { x: -100 },
};

const backwardAnimation = {
  initial: { x: -100 },
  animate: { x: 0 },
  exit: { x: 100 },
};

const AnimatedPage = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const direction = location.state?.direction || 'forward'; // Default to forward

  const animationVariants = direction === 'backward' ? backwardAnimation : forwardAnimation;

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
