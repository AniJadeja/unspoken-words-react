import React, { useEffect, useRef, useState } from 'react';
import { availableWidth, getAvailableWidth } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Typed from 'react-typed';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs';
import gitHubMark from '../assets/social-media-logo-marks/git_hub_logo_mark.svg';
import linkedInMark from '../assets/social-media-logo-marks/linked_in_logo_mark.svg';
import instagramMark from '../assets/social-media-logo-marks/instagram_logo_mark.svg';
import { get } from 'firebase/database';



const Home = () => {
  const navigate = useNavigate();

  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const [dottedDivisionHeight, setDottedDivisionHeight] = useState(130); // Initialize isMobileViewActive as true
  const [displayPicture, setDisplayPicture] = useState('');
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const typedStrings = useRef([
    'Aniruddhsinh Jadeja',
    '   A Web Developer',
  ])

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
    setIsSmallMobile(window.innerHeight < 680)
  }

  const avialableWidth = useRef(getAvailableWidth());
  const avialableHeight = useRef(window.innerHeight);

  const calculateHeights = () => {
    const navBar = document.getElementById('middleNavigationBar'); //  Navigationbar's ID
    const footer = document.getElementById('footer');
    const introText = document.getElementById('introText');
    handleResize();


    // const fullHeight = window.innerHeight;
    // console.log('full height:', fullHeight);
    // const navBarHeight = getComputedStyle(navBar).height;
    // console.log('navBar height:', navBarHeight);
    // const footerHeight = getComputedStyle(footer).height;
    // console.log('footer height:', footerHeight);
    // const sectionHeight = getComputedStyle(document.getElementById('homePage')).height;
    // console.log('section height:', sectionHeight);
    const articleHeight = getComputedStyle(document.getElementById('articlesWrapper')).height;
    console.log('article height:', articleHeight);




    if (navBar && footer && introText) {

      if (avialableWidth.current < 359) {
        setDottedDivisionHeight(100);
        setDottedDivisionWidth((avialableWidth.current * 78) / 100)
      }
      else if (availableWidth.current < 560) {

      }
      else if (avialableWidth.current < 768) {
        setDottedDivisionWidth((avialableWidth.current * 80) / 100)
      }
      else {
        setDottedDivisionWidth((avialableWidth.current * 40) / 100)
        typedStrings.current = ['Aniruddhsinh Jadeja', 'A Web Developer']
      }
    }


  };



  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    calculateHeights();
    getCurrentPageData().then((data) => {
      setDisplayPicture(data.displayPictureUrl);
    }).catch((error) => {
      navigate('/error');
    });
  }, [])

  return (
    <AnimatedPage>
      <section
        id='homePage'
        style={{
          height: (isMobile ? (isSmallMobile ? '70svh' : '100svh') : `calc(100svh - 194px)`),
          maxHeight: isSmallMobile ? '150svh' : `calc(100svh - 194px)`
        }}
        className={`px-10 lg:px-0  text-[--color-primary-white] align-center`}>
        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> H o m e</p>
        <div id='articlesWrapper' className='lg:grid lg:grid-cols-2 flex-col relative align-center w-full'
          style={{
            height: isMobile ? '100%' : 'inherit',
            maxHeight: `inherit`,
          }}
        >
          <article id='displayPictureArticle'
            style={{
              height: isMobile ? 'auto' : '70%',
              width: '100%',
              maxHeight: `inherit`
            }}
            className=' lg:relative absolute top-0 align-center order-1 lg:order-2'>
            <img
              src={displayPicture}
              style={{
                objectFit: "contain",
                mixBlendMode: 'lighten',
                height: 'auto',
                width: `auto`,
                maxWidth: `100%`,
                maxHeight: `100%`
              }} />
          </article>

          <article
            id='introArticle'
            style={{
              height: isMobile ? 'auto' : '70%',
              width: '100%',
              maxHeight: `100%`
            }}
            className='lg:relative absolute bottom-0 order-2 lg:order-1 align-center'>
            <div
              className=' block'>
              <p
                className='font-inter mb-4 text-[var(--color-primary-white)] sm:-mt-4 sm3:mt-0 text-xs sm2:text-lg lg:text-lg xl:text-xl text-center lg:text-left'>Hi I am,</p>

              <p
                id='introText'
                className='font-reef text-center mt-4 sm:mb-2 mb-4 text-[var(--color-primary-white)] text-sm tracking-[4px] sm:text-[18px] sm2:text-xl sm3:text-2xl xl:text-4xl lg:text-left min-w-fit sm:-mt-4'>
                <Typed
                  strings={typedStrings.current}
                  typeSpeed={50}
                  backSpeed={20}
                  className='text-[var(--color-primary-accent)]'
                  loop />
              </p>


              <DottedDiv
                className="align-center"
                height={120}
                width={320} />
              <div
                className='grid grid-cols-1 lg:grid-cols-2'>
                <div
                  className='sm:-mt-4 sm2:mt-0'>
                  <ButtonPrimary
                    text="Know Me More"
                    path="aboutme"
                    variant="textBordered"
                    border={false} />
                </div>

                <div
                  className='flex justify-center lg:justify-end text-xs sm:text-base text-[var(--color-primary-white)] pb-0 pt-6'>
                  <a
                    href="https://www.github.com/AniJadeja"
                    target="_blank">
                    <img
                      src={gitHubMark}
                      className="h-8 mb-0 mt-auto" />
                  </a>
                  <a
                    href="https://www.instagram.com/_the_pen_of_dreams_/"
                    target="_blank">
                    <img
                      src={instagramMark}
                      className="h-8 ml-5 mb-0 mt-auto" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anijadeja/"
                    target="_blank">
                    <img
                      src={linkedInMark}
                      className="h-8 ml-5 mb-0 mt-auto" />
                  </a>
                </div>
              </div>
            </div>
          </article>

        </div>
       
      </section>
      
      <div className='fixed right-0 left-0 bottom-0'>
        <Footer />
      </div>
    </AnimatedPage>
  );
};





export default Home;
