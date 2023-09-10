import React, { useEffect, useRef, useState } from 'react';
import { availableHeight, availableWidth, projectName } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';

import displayPicture from '../Assets/displayPicture.png'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';


const Home = () => {
  const [sectionHeight, setSectionHeight] = useState('auto'); // Initialize section height as 'auto'
  const [articleHeight, setArticleHeight] = useState('auto'); // Initialize article height as 'auto'
  const [subArticleHeight, setSubArticleHeight] = useState('auto'); // Initialize sub article height as 'auto'
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const imageHeight = useRef(560);

  useEffect(() => {
    // Function to calculate and set section and article heights
    const calculateHeights = () => {
      const navBar = document.getElementById('middleNavigationBar'); // Replace with your actual Navigationbar's ID
      const footer = document.getElementById('footer');
      const introText = document.getElementById('introText');
      if (navBar && footer && introText) {
        const navBarHeight = navBar.offsetHeight; // Get the height of the Navigationbar
        const footerHeight = footer.offsetHeight; // Get the height of the footer


        // Calculate section height by subtracting Navigationbar and footer heights
        const newSectionHeight = `calc(100vh - ${navBarHeight}px - ${footerHeight}px - 49px) `;

        // Calculate article height by subtracting footer height
        const newArticleHeight = `calc(${newSectionHeight} - ${footerHeight}px)`;

        const newSubArticleHeight = `calc(${newSectionHeight} - ${footerHeight}px - 32px)`;

        // setDottedDivisionWidth((availableWidth*35)/100);
        setDottedDivisionWidth(introText.clientWidth);
        imageHeight.current = ((availableHeight * 70) / 100)

        // Set the calculated heights
        setSectionHeight(newSectionHeight);
        setArticleHeight(newArticleHeight);
        setSubArticleHeight(newSubArticleHeight);


      }
    };

    // Calculate heights on initial load and window resize
    calculateHeights();
    window.addEventListener('resize', calculateHeights);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', calculateHeights);
    };
  }, []);

  return (
    <section style={{ minHeight: sectionHeight }}>
      {/* Article */}
      <article
        id='article'

        style={{ minHeight: articleHeight }}
      >
        {/* Left and Right Article Divs */}
        <div className={(availableWidth < 768) ? 'mx-5 grid grid-cols-1 gap-4' : 'grid grid-cols-2 gap-4 mx-5'}>
          <div
            className={'p-2 lg:order-last align-center'} id='leftArticle'

          >
            {console.log(imageHeight.current)}
            <img className='' height={imageHeight.current} src={displayPicture} width="auto" style={{ objectFit: "cover", mixBlendMode: 'lighten', maxHeight: `${imageHeight.current}px` }} />
          </div>
          <div className={(availableWidth < 768) ?
            // Mobile CSS 
            'text-white p-2 -mt-[100px] flex justify-center mb-8'
            : // Desktop CSS 
            ' text-white p-2 align-center'}
            id='rightArticle'
            style={{ height: (availableWidth < 768) ? "fit-content" : subArticleHeight, minHeight: (availableWidth < 768) ? "fit-content" : subArticleHeight }}>
            <div>
              <p className='font-inter mt-4 mb-4 text-white text-md lg:text-lg xl:text-xl text-center lg:text-left'>Hi I am,</p>
              <p id='introText' className='font-reef text-center mt-4 mb-4 text-white text-2xl tracking-[4px] sm:text-md xl:text-4xl lg:text-left'>I am Aniruddhsinh Jadeja</p>

              <DottedDiv className="align-center" height={130} width={dottedDivisionWidth} />
              <ButtonPrimary text="Know Me More" path="aboutme" />
            </div>



          </div>
        </div>
      </article>

      {/* Footer */}
      <footer id='footer' className='grid lg:grid-cols-2 min-w-screen h-16 text-white '>
        <p className='font-reef text-[var(--color-primary-gray)] align-center tracking-[4px] text-sm lg:text-lg xl:text-xl'>Project : {projectName} </p>
        <p className='font-reef text-[var(--color-primary-gray)] hidden lg:align-center tracking-[4px] text-sm lg:text-lg xl:text-xl'>Built from scratch by me .{")"}</p>
      </footer>
    </section>
  );
};





export default Home;
