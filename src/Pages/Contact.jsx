import React, { useEffect, useRef, useState } from 'react';
import { availableWidth, getAvailableWidth } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Footer from '../Components/Footer/Footer';
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs';
import InputText from '../Components/InputText/InputText';
import { set } from 'firebase/database';

const Contact = () => {
  const [sectionHeight, setSectionHeight] = useState('auto'); // Initialize section height as 'auto'
  const [articleHeight, setArticleHeight] = useState('auto'); // Initialize article height as 'auto'
  const [subArticleHeight, setSubArticleHeight] = useState('auto'); // Initialize sub article height as 'auto'
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const [dottedDivisionHeight, setDottedDivisionHeight] = useState(130); // Initialize isMobileViewActive as true
  const [resumePicture, setResumePicture ] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const imageHeight = useRef(560);



  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleMesssageChange = (value) => {
    setMessage(value);
  }


  const avialableWidth = useRef(getAvailableWidth());
  console.log("Available width " + avialableWidth.current)
  const avialableHeight = useRef(window.innerHeight);

  const calculateHeights = () => {
    const navBar = document.getElementById('middleNavigationBar'); //  Navigationbar's ID
    const footer = document.getElementById('footer');
    const contactForm = document.getElementById('contactForm');


    if (navBar && footer && contactForm) {
      // Calculate section height by subtracting Navigationbar and footer heights
      const newSectionHeight = `calc(100vh - 194px)`;

      // Calculate article height by subtracting footer height
      const newArticleHeight = `calc(${newSectionHeight} - 64px)`;

      const newSubArticleHeight = `calc(${newSectionHeight} - 96px)`;
      // console.log("Available width " + availableWidth.current )

      setDottedDivisionWidth(contactForm.offsetWidth)
     
      if (avialableWidth.current < 359) {
        setDottedDivisionHeight(100);
      }
      else if (availableWidth.current < 560) {
        imageHeight.current = ((avialableHeight.current * 60) / 100)
      }
      else if (avialableWidth.current < 768) {
        imageHeight.current = ((avialableHeight.current * 50) / 100)
      }
      else {
        imageHeight.current = ((avialableHeight.current * 70) / 100)
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
      setResumePicture(data.resumePictureUrl);
    })
  }, []);
  
  return (
    <AnimatedPage>
      <section id='homePage' style={{ minHeight: sectionHeight }}>
        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> H o m e</p>
        {/* Article */}
        <article
          id='article'
          className='pt-14'
          style={{ minHeight: articleHeight }}>
          {/* Left and Right Article Divs */}
          <div className={(avialableWidth.current < 768) ? 'mx-5 grid grid-cols-1 gap-4' : 'grid grid-cols-[60%_40%] gap-4 mx-5'}>
            
            
            <div className={'py-10 px-4 align-center sm:-mt-16 sm2:-mt-12 sm3:-mt-10 sm4:-mt-14 lg:my-auto'} id='leftArticle' style={{ height: imageHeight.current }}>
              <img className='' height={imageHeight.current} src={resumePicture} width="90%" style={{ objectFit:'cover',objectPosition:'center top', maxHeight: `${imageHeight.current}px` }} />
            </div>
            


            <div className={(avialableWidth.current < 768) ?
              // Mobile CSS 
              'text-[var(--color-primary-white)] p-2 -mt-[250px] flex justify-center mb-8'
              : // Desktop CSS 
              ` text-[var(--color-primary-white)] p-2 align-center w-3/4`

            }
              id='rightArticle'
            
              style={{ height: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight, minHeight: (avialableWidth.current < 768) ? "fit-content" : subArticleHeight }}>


              <div id='contactForm' className='mt-32 w-full'>
                <div className='grid lg:grid-cols-2 gap-2'>
                  <InputText placeholder="Name" onInputChange={handleNameChange}/>
                  <InputText placeholder="Email" onInputChange={handleEmailChange} />
                </div>
                <InputText placeholder="Message" 
                onInputChange={handleMesssageChange}/>
                <DottedDiv className="align-center" height={dottedDivisionHeight} width={dottedDivisionWidth} />
                <div className='sm:-mt-4 sm2:mt-0'>
                  <ButtonPrimary text="Send Message" path="aboutme" variant="textBordered" border={false} />
                </div>
              </div>


            </div>


          </div>
        </article>
        <div className='max-w-[var(--max-width)] mx-auto absolute bottom-0 w-full'>
          <Footer home={false} />
        </div>
      </section>
    </AnimatedPage>
  );
};





export default Contact;
