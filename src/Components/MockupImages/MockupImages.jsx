import React, { useRef } from 'react';
import './MockupImages.css'
import './Animation.css'

const MockupImages = ({ images, isTwoColumnView }) => {

  const widthSubstraction = isTwoColumnView ? 55 : 75;
  const imageWidth = window.innerWidth - ((widthSubstraction * window.innerWidth) / 100);
  const imageHeight = ((45 * imageWidth) / 100); // image height and width is set dynamically to support single column view and double column view
  const imageTravelHeight = ((52 * imageWidth) / 100); //sets height of the outer div, so the travelling div would not affect other divs. (Use pesticide to visualize it)


  return (
    <div id='componentOuterLayout' className='flex' >
      <div id='componentInnerLayout' className="image-container align-center" style={{ height: imageHeight, width: imageWidth }}>
        {
          images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`image`}
              style={{ zIndex: images.length - index, marginLeft: (images.length - index)*10 }}
            />
          ))
        }
      </div>
    </div>

  );
};


export default MockupImages;
