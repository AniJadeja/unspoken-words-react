import React, { useEffect, useRef, useState } from 'react';
import { availableWidth, getAvailableHeight, getAvailableWidth, projectName } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';

import displayPicture from '../Assets/displayPicture.png'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Typed from 'react-typed';
import Footer from '../Components/Footer/Footer';


const Home = () => {
  const [sectionHeight, setSectionHeight] = useState('auto'); // Initialize section height as 'auto'
  const [articleHeight, setArticleHeight] = useState('auto'); // Initialize article height as 'auto'
  const [subArticleHeight, setSubArticleHeight] = useState('auto'); // Initialize sub article height as 'auto'
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const imageHeight = useRef(560);
  const typedStrings = useRef([
    'Aniruddhsinh Jadeja',
    '   A Web Devloper',
  ])



  const avialableWidth = useRef(window.innerWidth);
  const avialableHeight = useRef(window.innerHeight);

  const calculateHeights = () => {
    const navBar = document.getElementById('middleNavigationBar'); //  Navigationbar's ID
    const footer = document.getElementById('footer');
    const introText = document.getElementById('introText');


    if (navBar && footer && introText) {
      const navBarHeight = navBar.offsetHeight; // Get the height of the Navigationbar
      const footerHeight = footer.offsetHeight; // Get the height of the footer


      // Calculate section height by subtracting Navigationbar and footer heights
      const newSectionHeight = `calc(100vh - ${navBarHeight}px - ${footerHeight}px - 65px)`;

      // Calculate article height by subtracting footer height
      const newArticleHeight = `calc(${newSectionHeight} - ${footerHeight}px)`;

      const newSubArticleHeight = `calc(${newSectionHeight} - ${footerHeight}px - 32px)`;

      if(avialableWidth.current<768)
      {
        console.log("Setting Dotted Div width")
        setDottedDivisionWidth((avialableWidth.current*80)/100)
        console.log("Dotted Div width set : " + dottedDivisionWidth.current);
        imageHeight.current = ((avialableHeight.current * 50) / 100)
      }
      else{
        setDottedDivisionWidth((avialableWidth.current*40)/100)
        imageHeight.current = ((avialableHeight.current * 70) / 100)
        typedStrings.current = ['Aniruddhsinh Jadeja','A Web Devloper']
      }
      
      // Set the calculated heights
      setSectionHeight(newSectionHeight);
      setArticleHeight(newArticleHeight);
      setSubArticleHeight(newSubArticleHeight);
    }

  };


  useEffect(() => {
    // Run on initial mount
    calculateHeights();
  }, []);

  return (
    <AnimatedPage>
      <section id='homePage' style={{ minHeight: sectionHeight}}>
      <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> H o m e</p>
        {/* Article */}
        <article
          id='article'  
          className='pt-14'
          style={{ minHeight: articleHeight }}>
          {/* Left and Right Article Divs */}
          <div className={(avialableWidth.current < 768) ? 'mx-5 grid grid-cols-1 gap-4' : 'grid grid-cols-2 gap-4 mx-5'}>
            <div className={'p-2 lg:order-last align-center'} id='leftArticle'>
              <img className='' height={imageHeight.current} src={displayPicture} width="auto" style={{ objectFit: "cover", mixBlendMode: 'lighten', maxHeight: `${imageHeight.current}px` }} />
            </div>
            <div className={(avialableWidth.current < 768) ?
              // Mobile CSS 
              'text-[var(--color-primary-white)] p-2 -mt-[250px] flex justify-center mb-8'
              : // Desktop CSS 
              ' text-[var(--color-primary-white)] p-2 align-center'}
              id='rightArticle'
              style={{ height: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight, minHeight: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight }}>
              <div className='mt-32'>
                <p className='font-inter mb-4 text-[var(--color-primary-white)] text-md lg:text-lg xl:text-xl text-center lg:text-left'>Hi I am,</p>
                <p id='introText' className='font-reef text-center mt-4 mb-4 text-[var(--color-primary-white)] text-2xl tracking-[4px] sm:text-md xl:text-4xl lg:text-left min-w-fit'> 
                  
                  <Typed 
                    strings={typedStrings.current} 
                    typeSpeed={50} 
                    backSpeed={20} 
                    className='text-[var(--color-primary-white)]' 
                    loop />
                  
                  </p>
                <DottedDiv className="align-center" height={130} width={dottedDivisionWidth } />
              
                <ButtonPrimary text="Know Me More" path="aboutme" variant="textBordered" border={false}/>
              </div>
            </div>
          </div>
        </article>
        <Footer home={true}/>
      </section>
    </AnimatedPage>
  );
};





export default Home;
