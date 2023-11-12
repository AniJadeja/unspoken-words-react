import React from 'react';
import './MockupImages.css'
import './Animation.css'

const MockupImages = ({ images }) => {
  return (
    <div className="image-container">
      {
        images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`image`}
            style={{ zIndex: images.length - index }}
          />
        ))
      }
    </div>
  );
};

export default MockupImages;
 