import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { availableWidth, getAvailableWidth } from '..';
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Footer from '../Components/Footer/Footer';
import { getCurrentPageData, sendMessage } from '../firebase/manageRealtimeDatabase.mjs';
import InputText from '../Components/InputText/InputText';
import axios from 'axios';
import UserMessage from '../models/UserMessage';
import arrow from '../assets/arrow.gif';
import { Puff } from 'react-loading-icons'
import { set } from 'firebase/database';


const Contact = () => {
  const [sectionHeight, setSectionHeight] = useState('auto'); // Initialize section height as 'auto'
  const [articleHeight, setArticleHeight] = useState('auto'); // Initialize article height as 'auto'
  const [subArticleHeight, setSubArticleHeight] = useState('auto'); // Initialize sub article height as 'auto'
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270'); // Initialize isMobileViewActive as true
  const [dottedDivisionHeight, setDottedDivisionHeight] = useState(130); // Initialize isMobileViewActive as true
  const [resumeFileUrl, setResumeFileUrl] = useState(''); // Initialize isMobileViewActive as true
  const [resumePicture, setResumePicture] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [NameErrorMessage, setNameErrorMessage] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isEmailErrorMessage, setIsEmailErrorMessage] = useState('');
  const [isMessageError, setIsMessageError] = useState(false);
  const [isMessageErrorMessage, setIsMessageErrorMessage] = useState('');

  const imageHeight = useRef(560);
  const navigate = useNavigate();


  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handleNameChange = (value) => {
    setName(value);
  }

  const handleMesssageChange = (value) => {
    setMessage(value);
  }

  const handleMessageSend = () => {
    if (validateInputs()) {
      setIsNameError(false);
      setIsEmailError(false);
      setIsMessageError(false);
      setIsLoading(true);
      const userM = {
        name: name,
        email: email,
        message: message
      }
      const userMessage = new UserMessage(userM)
      sendMessage(userMessage).then((result) => {
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
    else {
      setIsLoading(false);
    }


    // if (name !== '' && email !== '' && message !== '') {
    //   if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    //     if (message.length > 10) {
    //       if (name.length > 3 && name.length < 50) {

    //       }
    //       else {
    //         setIsNameError(true);
    //         return;
    //       }
    //     }
    //     else {
    //       setIsMessageError(true);
    //       return;
    //     }
    //   }
    //   else {
    //     setIsEmailError(true);
    //     return;
    //   }
    // }
    // else {
    //   setIsNameError(true);
    //   setIsEmailError(true);
    //   setIsMessageError(true);
    //   return;
    // }
  }

  function validateEmail(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let res = re.test(String(email).toLowerCase());
    if (res) {
      setIsEmailError(false);
      setIsEmailErrorMessage(' ');
      return true;
    }
    else {
      setIsEmailError(true);
      setIsEmailErrorMessage('Please enter a valid email address');
      return false;
    }
  }

  function validateName(name) {
    if (name !== '' && name.length > 2 && name.length < 50 &&
    name !== undefined && name !== null && name !== false && name !== true
    && name !== NaN && name !== 0 && name !== '0' && name !== 'false' && name !== 'null' && name !== 'undefined' && name !== 'NaN' && name !== 'true') {
      setIsNameError(false);
      setNameErrorMessage(' ');
      return true;
    }
    else {
      setNameErrorMessage('Name must be between 3 and 50 characters');
      setIsNameError(true);
      return false;
    }
  }

  function validateMessage(message) {
    if (message.length > 10 && message !== '' && message !== undefined && message !== null && message !== false && message !== true && message !== NaN && message !== 0 && message !== '0' && message !== 'false' && message !== 'null' && message !== 'undefined' && message !== 'NaN' && message !== 'true') {
      setIsMessageError(false);
      setIsMessageErrorMessage(' ');
      return true;
    }
    else {
      setIsMessageError(true);
      setIsMessageErrorMessage('Message must be atleast 10 characters long');
      return false;
    }
  }

  function validateInputs() {

    if (validateName(name) && validateEmail(email) && validateMessage(message)) {
      return true;
    }
    else {
      return false;
    }
  }

  const avialableWidth = useRef(getAvailableWidth());
  //console.log("Available width " + avialableWidth.current)
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
      else if (avialableWidth.current < 1024) {
        imageHeight.current = ((avialableHeight.current * 60) / 100)
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
      setResumeFileUrl(data.resumeFileUrl);
    }).catch((error) => {
      navigate('/error');
    });

  }, []);



  const handleDownload = async () => {
    // This can be downloaded directly:
    try {
      // Make an HTTP request to get the file as a blob
      const response = await axios.get(resumeFileUrl, {
        responseType: 'blob',
      });

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a link element
      const link = document.createElement('a');

      // Set the href attribute with the blob URL
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute with the desired filename
      link.download = 'Resume_Anirudhdhsinh_Jadeja.pdf';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to initiate the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
    // window.open(resumeFileUrl);
  };

  return (
    <AnimatedPage>
      <section id='homePage' style={{ minHeight: sectionHeight }}>
        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> C o n t a c t</p>
        {/* Article */}
        <article
          id='article'
          className='pt-14'
          style={{ minHeight: articleHeight }}>
          {/* Left and Right Article Divs */}
          <div className={'mx-5 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-[60%_40%] gap-4'}>


            <div className={'py-10 align-center lg:my-auto flex-col'} id='leftArticle' style={{ height: availableWidth < 768 ? imageHeight.current / 1.4 : imageHeight.current, position: 'relative' }}>
              <img className='' src={resumePicture} style={{
                objectFit: 'cover', objectPosition: 'center top',
                width: availableWidth < 768 ? '100%' : '90%', maxHeight: availableWidth < 768 ? imageHeight.current / 1.4 : imageHeight.current
              }} />

              <button
                className='absolute bottom-[12%] lg:bottom-[22%] mx-auto my-auto transform bg-[var(--color-primary-accent)] text-white rounded-md px-4 py-2 mt-4 hover:bg-[var(--color-primary-accent-hover)] transition-all duration-300 ease-in-out'
                onClick={handleDownload}
              >
                Download Resume
              </button>
            </div>




            <div className={(avialableWidth.current < 1024) ?
              // Mobile CSS 
              'text-[var(--color-primary-white)] p-2 mt-8 mb-8'
              : // Desktop CSS 
              ` text-[var(--color-primary-white)] p-2 align-center w-[95%]`
            }
              id='rightArticle'

              style={{ height: (avialableWidth.current < 1024) ? "fit-content" : subArticleHeight, minHeight: (avialableWidth.current < 1024) ? "fit-content" : subArticleHeight }}>


              <div id='contactForm' className=' w-full'>
                <div className='grid lg:grid-cols-2 gap-2'>
                  <InputText placeholder="Name" onInputChange={handleNameChange} isError={isNameError} errorMessage={NameErrorMessage} validator={validateName} />
                  <InputText placeholder="Email" onInputChange={handleEmailChange} isError={isEmailError} errorMessage={isEmailErrorMessage} validator={validateEmail} />
                </div>
                <InputText placeholder="Message"
                  onInputChange={handleMesssageChange} isError={isMessageError} errorMessage={isMessageErrorMessage} validator={validateMessage}/>
                <DottedDiv className="align-center" height={dottedDivisionHeight} width={dottedDivisionWidth} />
                <div className='sm:-mt-4 sm2:mt-0'>

                  <button
                    className={
                      'bg-var(--color-primary-black) h-auto w-auto px-4 align-center mt-5 font-inter border-[1px] border-solid border-[var(--color-primary-accent)] flex p-1'
                    }
                    onClick={handleMessageSend}
                  > {isLoading ? (<Puff />) :
                    (<div className='flex'>
                      <p className='mt-1'>Send Message</p>
                      <img src={arrow} height={30} width={30} className="-rotate-90 mt-1 ml-2" />
                    </div>)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className='max-w-[var(--max-width)] mx-auto  w-full mt-12'>
          <Footer home={false} />
        </div>
      </section>
    </AnimatedPage>
  );
};





export default Contact;
