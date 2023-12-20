import React, { useState } from 'react';
import './MockupImages.css'
import './Animation.css'

const MockupImages = ({ images, isTwoColumnView, isDarken }) => {
  const widthSubstraction = isTwoColumnView ? 50 : 77;
  const imageWidth = window.innerWidth - ((widthSubstraction * window.innerWidth) / 100);
  const imageHeight = ((45 * imageWidth) / 100); // image height and width is set dynamically to support single column view and double column view
  const imageTravelHeight = ((52 * imageWidth) / 100); //sets height of the outer div, so the travelling div would not affect other divs. (Use pesticide to visualize it)

  const [isHovered, setHovered] = useState(false);

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
