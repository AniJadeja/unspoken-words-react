import React, { useEffect, useRef, useState } from 'react';
import { availableWidth, getAvailableWidth } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Typed from 'react-typed';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { getCurrentPageData} from '../firebase/manageRealtimeDatabase.mjs';
import gitHubMark from '../assets/social-media-logo-marks/git_hub_logo_mark.svg';
import linkedInMark from '../assets/social-media-logo-marks/linked_in_logo_mark.svg';
import instagramMark from '../assets/social-media-logo-marks/instagram_logo_mark.svg';



const Home = () => {
  const navigate = useNavigate();
  const [sectionHeight, setSectionHeight] = useState('auto'); // Initialize section height as 'auto'
  const [articleHeight, setArticleHeight] = useState('auto'); // Initialize article height as 'auto'
  const [subArticleHeight, setSubArticleHeight] = useState('auto'); // Initialize sub article height as 'auto'
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const [dottedDivisionHeight, setDottedDivisionHeight] = useState(130); // Initialize isMobileViewActive as true
  const [ displayPicture, setDisplayPicture] = useState(''); 
  const imageHeight = useRef(560);
  const typedStrings = useRef([
    'Aniruddhsinh Jadeja',
    '   A Web Developer',
  ])



  const avialableWidth = useRef(getAvailableWidth());
  const avialableHeight = useRef(window.innerHeight);

  const calculateHeights = () => {
    const navBar = document.getElementById('middleNavigationBar'); //  Navigationbar's ID
    const footer = document.getElementById('footer');
    const introText = document.getElementById('introText');


    if (navBar && footer && introText) {
      const navBarHeight = navBar.offsetHeight; // Get the height of the Navigationbar
      const footerHeight = footer.offsetHeight; // Get the height of the footer


      // Calculate section height by subtracting Navigationbar and footer heights
      const newSectionHeight = `calc(100vh - 194px)`;

      // Calculate article height by subtracting footer height
      const newArticleHeight = `calc(${newSectionHeight} - 64px)`;

      const newSubArticleHeight = `calc(${newSectionHeight} - 96px)`;
     // console.log("Available width " + availableWidth.current )

      if(avialableWidth.current<359){
        setDottedDivisionHeight(100);
        setDottedDivisionWidth((avialableWidth.current*78)/100)
      }
      else if(availableWidth.current < 560){
        imageHeight.current = ((avialableHeight.current * 60) / 100)
      }
      else if(avialableWidth.current<768)
      {
        setDottedDivisionWidth((avialableWidth.current*80)/100)
        imageHeight.current = ((avialableHeight.current * 50) / 100)
      }
      else{
        setDottedDivisionWidth((avialableWidth.current*40)/100)
        imageHeight.current = ((avialableHeight.current * 70) / 100)
        typedStrings.current = ['Aniruddhsinh Jadeja','A Web Developer']
      }
      
      // Set the calculated heights
      setSectionHeight(newSectionHeight);
      setArticleHeight(newArticleHeight);
      setSubArticleHeight(newSubArticleHeight);
    }

  };


  useEffect(() => {
    calculateHeights();
    getCurrentPageData().then((data) => {
      setDisplayPicture(data.displayPictureUrl);
    }).catch((error) => {
      navigate('/error');
    });
  }, [imageHeight.current,window.innerWidth,window.innerHeight]);

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
            <div className={'p-2 lg:order-last align-center sm:-mt-16 sm2:-mt-12 sm3:-mt-10 sm4:-mt-14 lg:my-auto'} id='leftArticle' style={{height:imageHeight.current}}>
              <img  className='' height={imageHeight.current} src={displayPicture} width="auto" style={{ objectFit: "cover", mixBlendMode: 'lighten', maxHeight: `${imageHeight.current}px` }} />
            </div>
            <div  className={(avialableWidth.current < 768) ?
              // Mobile CSS 
              'text-[var(--color-primary-white)] p-2 -mt-[250px] flex justify-center mb-8'
              : // Desktop CSS 
              ' text-[var(--color-primary-white)] p-2 align-center'}
              id='rightArticle'
              style={{ height: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight, minHeight: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight}}>
              <div className='mt-32'>
                <p className='font-inter mb-4 text-[var(--color-primary-white)] sm:-mt-4 sm3:mt-0 text-xs sm2:text-lg lg:text-lg xl:text-xl text-center lg:text-left'>Hi I am,</p>
                <p id='introText' className='font-reef text-center mt-4 sm:mb-2 mb-4 text-[var(--color-primary-white)] text-sm tracking-[4px] sm:text-[18px] sm2:text-xl sm3:text-2xl xl:text-4xl lg:text-left min-w-fit sm:-mt-4'> 
                  
                  <Typed 
                    strings={typedStrings.current} 
                    typeSpeed={50} 
                    backSpeed={20} 
                    className='text-[var(--color-primary-accent)]' 
                    loop />
                  
                  </p>
                <DottedDiv className="align-center" height={dottedDivisionHeight} width={dottedDivisionWidth } />
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                
                <div className='sm:-mt-4 sm2:mt-0'>
                <ButtonPrimary text="Know Me More" path="aboutme" variant="textBordered" border={false}/>
                </div>
                <div className='flex justify-center lg:justify-end text-xs sm:text-base text-[var(--color-primary-white)] pb-0 pt-6'>
                  <a href="https://www.github.com/AniJadeja" target="_blank">
                    <img src={gitHubMark} className="h-8 mb-0 mt-auto" />
                  </a>
                  <a href="https://www.instagram.com/_the_pen_of_dreams_/" target="_blank">
                    <img src={instagramMark} className="h-8 ml-5 mb-0 mt-auto" />
                  </a>
                  <a href="https://www.linkedin.com/in/anijadeja/" target="_blank">
                    <img src={linkedInMark} className="h-8 ml-5 mb-0 mt-auto" />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </article>
          <div className='max-w-[var(--max-width)] mx-auto absolute bottom-0 w-full'>
        <Footer home={false}/>
        </div>
      </section>
    </AnimatedPage>
  );
};





export default Home;
