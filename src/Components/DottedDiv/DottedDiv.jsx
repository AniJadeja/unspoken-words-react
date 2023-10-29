import React from 'react';
import '../../index.css'

const DottedDiv = ({ width, height }) => {
  const dotSize = 17; // Adjust the size of each dot as needed
  const dotsPerRow = Math.round(width / dotSize);
  const rows = Math.floor(height / dotSize);
  const gradientHeight = Math.floor(height / 2);
  const gradientWidth = width;



  const dotStyle = {
    position:`relative`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: 'transparent',
    fontFamily: 'monospace',
    fontSize: `${dotSize}px`,
    lineHeight: `${dotSize}px`,
    whiteSpace: 'pre',
    overflow: 'hidden',
    color: 'var(--color-primary-white)',
    letterSpacing: '8px',
    // Optional: Add overflow: hidden to clip any overflowing content
  };
  //     backgroundImage: 'linear-gradient(to top, var(--color-primary-black), var(--color-gradient-black), transparent)'
  const gradientStyle = {
    position:`relative`,
    width: `${gradientWidth}px`,
    height: `${gradientHeight}px`,
    backgroundImage: `linear-gradient(to top, 
                      var(--color-primary-black) ,
                      var(--color-gradient-black), 
                      transparent`,
    minHeight: `${gradientHeight}px`,
    maxWidth: `${gradientWidth}px`,
    marginTop: `-${gradientHeight}px`,
  };


  const generateDots = () => {
    const dotArray = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < dotsPerRow; col++) {
        dotArray.push('.');
      }
      if (row < rows - 1) {
        dotArray.push('\n');
      }
    }
    return dotArray.join('');
  };

  return <div id='dottedDivCompoenent'>
    <div style={dotStyle}>{generateDots()}</div>
    <div style={gradientStyle}></div>
    
  </div>
    ;
};

export default DottedDiv;
