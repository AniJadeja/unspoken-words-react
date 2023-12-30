import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Puff } from 'react-loading-icons';
import { getAvailableWidth, getAvailableHeight } from '..';
import { getCurrentPageData, sendMessage } from '../firebase/manageRealtimeDatabase.mjs';
import UserMessage from '../models/UserMessage';
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import AnimatedPage from '../Components/Animated/AnimatedPage';
import Footer from '../Components/Footer/Footer';
import InputText from '../Components/InputText/InputText';
import arrow from '../assets/arrow.gif';
import ConfirmationDialog from '../Components/ConfirmationDialog/ConfirmationDialog';

const Contact = () => {
  const [sectionHeight, setSectionHeight] = useState('auto'); 
  const [articleHeight, setArticleHeight] = useState('auto');
  const [subArticleHeight, setSubArticleHeight] = useState('auto');
  const [dottedDivisionWidth, setDottedDivisionWidth] = useState('270');
  const [dottedDivisionHeight, setDottedDivisionHeight] = useState(130);
  const [resumeFileUrl, setResumeFileUrl] = useState('');
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
  const availableWidth = useRef(getAvailableWidth());
  const availableHeight = useRef(getAvailableHeight());
  const isMessageSent = useRef(false);
  const isError = useRef(false);
  const navigate = useNavigate();
  const handleInputChange = (setValue, value) => setValue(value);

  const [isDialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const handleMessageSend = () => {
    if (validateInputs()) {
      setIsNameError(false);
      setIsEmailError(false);
      setIsMessageError(false);
      setIsLoading(true);

      const userMessage = new UserMessage({ name, email, message });

      sendMessage(userMessage)
        .then(() => { 
          setIsLoading(false) 
          isMessageSent.current = true;
          isError.current = false;
          openDialog();
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          isError.current = true;
          openDialog();
        });
    } else {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValid = re.test(String(email).toLowerCase());

    if (isValid) {
      setIsEmailError(false);
      setIsEmailErrorMessage(' ');
      return true;
    } else {
      setIsEmailError(true);
      setIsEmailErrorMessage('Please enter a valid email address');
      return false;
    }
  };

  const validateName = (name) => {
    const isValid =
      name !== '' &&
      name.length > 2 &&
      name.length < 50 ;
    if (isValid) {
      setIsNameError(false);
      setNameErrorMessage(' ');
      return true;
    } else {
      setNameErrorMessage('Name must be between 3 and 50 characters');
      setIsNameError(true);
      return false;
    }
  };

  const validateMessage = (message) => {
    const isValid =
      message.length > 10;

    if (isValid) {
      setIsMessageError(false);
      setIsMessageErrorMessage(' ');
      return true;
    } else {
      setIsMessageError(true);
      setIsMessageErrorMessage('Message must be at least 10 characters long');
      return false;
    }
  };

  const validateInputs = () =>
    validateName(name) && validateEmail(email) && validateMessage(message);

  const calculateHeights = () => {
    const navBar = document.getElementById('middleNavigationBar');
    const footer = document.getElementById('footer');
    const contactForm = document.getElementById('contactForm');

    if (navBar && footer && contactForm) {
      const newSectionHeight = `calc(100vh - 194px)`;
      const newArticleHeight = `calc(${newSectionHeight} - 64px)`;
      const newSubArticleHeight = `calc(${newSectionHeight} - 96px)`;

      setDottedDivisionWidth(contactForm.offsetWidth);

      if (availableWidth.current < 359) {
        setDottedDivisionHeight(100);
        console.log("width less than 359 : "+imageHeight.current);
      } else if (availableWidth.current < 560) {
        imageHeight.current = (availableHeight.current * 40) / 100;
        console.log("width less than 560 : "+imageHeight.current);
      } else if (availableWidth.current < 768) {
        imageHeight.current = (availableHeight.current * 50) / 100;
        console.log("width less than 768 : "+imageHeight.current);
      } else if (availableWidth.current < 1024) {
        imageHeight.current = (availableHeight.current * 60) / 100;
        console.log("width less than 1024 : "+imageHeight.current);
      } else {
        imageHeight.current = (availableHeight.current * 70) / 100;
        console.log("width greater than 1024 : "+imageHeight.current);
      }

      setSectionHeight(newSectionHeight);
      setArticleHeight(newArticleHeight);
      setSubArticleHeight(newSubArticleHeight);
    }
  };

  useEffect(() => {
    calculateHeights();
    getCurrentPageData()
      .then((data) => {
        setResumePicture(data.resumePictureUrl);
        setResumeFileUrl(data.resumeFileUrl);
      })
      .catch(() => navigate('/error'));
  }, [imageHeight.current]);

  const handleDownload = async () => {
    try {
      const response = await axios.get(resumeFileUrl, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Resume_Anirudhdhsinh_Jadeja.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <AnimatedPage>
      <section id='homePage' style={{ minHeight: sectionHeight }}>
        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'>
          C o n t a c t
        </p>
        <article id='article' className='pt-14' style={{ minHeight: articleHeight }}>
          <div className={'mx-5 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-[60%_40%] gap-4'}>
            <div className={'py-10 align-center lg:my-auto flex-col'} id='leftArticle'
            
            
            style={{ height:imageHeight.current, 
            position: 'relative' }}>

 
              <img className='' src={resumePicture} 
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center top', 
                width: availableWidth.current < 768 ? '100%' : '90%', 
                maxHeight: imageHeight.current,
                // availableWidth.current < 768 
                // ? 
                // imageHeight.current 
                // : 
                // imageHeight.current 
              }} />


              <button
              id='downloadResumeButton'
                className='absolute bottom-[12%] lg:bottom-[15%] mx-auto my-auto transform bg-[var(--color-primary-accent)] text-white rounded-md px-4 py-2 mt-4 hover:bg-[var(--color-primary-accent-hover)] transition-all duration-300 ease-in-out'
                onClick={handleDownload}
              >
                Download Resume
              </button>



            </div>
            <div className={(availableWidth.current < 1024) ?
              'text-[var(--color-primary-white)] p-2 mb-8'
              : ` text-[var(--color-primary-white)] p-2 align-center w-[95%]`}
              id='rightArticle'
              style={{ height: (availableWidth.current < 1024) ? "fit-content" : subArticleHeight, minHeight: (availableWidth.current < 1024) ? "fit-content" : subArticleHeight }}>
              <div id='contactForm' className=' w-full'>
                <div className='grid lg:grid-cols-2 gap-2'>
                  <InputText placeholder="Name" onInputChange={(value) => handleInputChange(setName, value)} isError={isNameError} errorMessage={NameErrorMessage} validator={validateName} />
                  <InputText placeholder="Email" onInputChange={(value) => handleInputChange(setEmail, value)} isError={isEmailError} errorMessage={isEmailErrorMessage} validator={validateEmail} />
                </div>
                <InputText placeholder="Message" onInputChange={(value) => handleInputChange(setMessage, value)} isError={isMessageError} errorMessage={isMessageErrorMessage} validator={validateMessage} />
                <DottedDiv className="align-center" height={dottedDivisionHeight} width={dottedDivisionWidth} />
                <div className='sm:-mt-4 sm2:mt-0'>
                  <button
                    className={'bg-var(--color-primary-black) h-auto w-auto px-4 align-center mt-5 font-inter border-[1px] border-solid border-[var(--color-primary-accent)] flex p-1'}
                    onClick={handleMessageSend}
                  >
                    {isLoading ? (
                      <Puff />
                    ) : (
                      <div className='flex'>
                        <p className='mt-1'>Send Message</p>
                        <img src={arrow} height={30} width={30} className="-rotate-90 mt-1 ml-2" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className='max-w-[var(--max-width)] mx-auto  w-full mt-12'>
          <Footer home={false} />
          <ConfirmationDialog isError={false} isVisible={isDialogVisible} setDialogVisible={setDialogVisible} />
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
