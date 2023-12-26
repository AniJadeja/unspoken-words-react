import React, { useEffect, useState } from 'react';
import './MockupImages.css'
import './Animation.css'
import { getAvailableWidth } from '../../index.js';

const MockupImages = ({ images, isTwoColumnView, isDarken }) => {


  const [widthSubstraction, setWidthSubstraction] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const availableWidth = getAvailableWidth();
    console.log("Available width " + availableWidth)
    setWidthSubstraction(isTwoColumnView ? 50 : 77);
    setImageWidth(availableWidth - ((widthSubstraction * availableWidth) / 100));
    console.log("Image width " + imageWidth)
    setImageHeight(((45 * imageWidth) / 100));
  },[imageWidth]);

  

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const lightImagestyle = {
    height: imageHeight,
    width: imageWidth,
    filter: isHovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.5)',
    transition: 'filter 0.5s ease', // Add a smooth transition for better visual effect
    
  };

  
  const darkImagestyle = {
    height: imageHeight,
    width: imageWidth,
    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
    transition: 'filter 0.5s ease', // Add a smooth transition for better visual effect
    
  };

  return (
    <div id='componentOuterLayout' className='flex'
    >
      <div
        id='componentInnerLayout'
        className="image-container align-center"
        style={isDarken ? darkImagestyle : lightImagestyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {
          images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`image`}
              style={{ zIndex: images.length - index, marginLeft: (images.length - index) * 10 }}
            />
          ))
        }
      </div>
    </div>

  );
};


export default MockupImages;
