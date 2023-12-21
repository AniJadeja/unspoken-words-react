import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import { availableWidth } from '..';

import '../index.css'
import Footer from '../Components/Footer/Footer';
import otherTech from '../assets/lottie-icons/other_tech.lottie'
import android from '../assets/lottie-icons/android.lottie'
import webDev from '../assets/lottie-icons/web_dev.lottie'
import personal from '../assets/lottie-icons/personal.lottie'
import professional from '../assets/lottie-icons/professional.lottie'
import uiUx from '../assets/lottie-icons/ui_ux.lottie'
import { DotLottiePlayer } from '@dotlottie/player-component';
import AboutMeModel from '../models/AboutMeModel';
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs';
import { set } from 'firebase/database';
import ScrollButton from '../Components/ScrollButton/ScrollButton';

const AboutMe = () => {


  const [dottedDivWidth, setDottedDivWidth] = useState(250);
  const [dottedDivHeight, setDottedDivHeight] = useState(100);
  const [aboutMeModel, setAboutMeModel] = useState();



  useEffect(() => {
    const introText = document.getElementById('introText');
    if (introText) {
      if (availableWidth > 768) {
        setDottedDivWidth((introText.clientWidth));
        setDottedDivHeight(introText.clientHeight);
      }
      else {
        setDottedDivWidth(introText.clientWidth);

      }
    }
    else {
      console.log("introText is unavailable")
    }
    getCurrentPageData().then((data) => {
      setAboutMeModel(new AboutMeModel(data));
    })


  }, [])

  return (
    <AnimatedPage>
      <section id='aboutMePage' className='text-[var(--color-primary-white)]  px-10 lg:px-20 mt-5 lg:mt-[70px]'>

        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'>A b o u t &nbsp; M e</p>

        <article id='introTextArticle' className='grid grid-cols-1 gap-5 lg:grid-cols-2 font-inter tracking-[2px] text-justify'>
          <p id='introText' className='text-xs sm:text-sm' >
            {
              aboutMeModel ? aboutMeModel.introParagraph : null
            }

          </p>


          <div className="align-center">

            <DottedDiv id="dotDiv" height={dottedDivHeight} width={dottedDivWidth} />

          </div>

        </article>

        <article id='skillsArtcile' className='mt-12 mb-8'>
          <p className='font-reef  mt-4 mb-4 text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit'>Skills</p>


          <div class='grid gap-4 grid-cols-2 md:grid-cols-3 mt-4 text-sm md:text-base gap-y-5'>
            <div>
              <div className='flex'>
                <div className='w-10 h-10 max-h-10'>



                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={android}
                    style={{ height: '40px', width: 'auto' }}
                  >
                  </dotlottie-player>

                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-[var(--color-primary-accent)] '>Android </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.androidSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div>
              <div className='flex'>
                <div className='w-10 h-10 max-h-10'>
                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={webDev}
                    style={{ height: '40px', width: 'auto' }}
                  >
                  </dotlottie-player>

                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)] '>Web Development </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.webDevelopmentSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='flex'>
                <div className='w-10 h-10 max-h-10'>
                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={uiUx}
                    style={{ height: '40px', width: 'auto', scale: '1.3' }}
                  >
                  </dotlottie-player>
                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>UI/UX </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.uiuxSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div>
              <div className='flex'>
                <div className='w-10 h-10 max-h-10'>
                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={otherTech}
                    style={{ height: '40px', width: 'auto', scale: '2' }}
                  >
                  </dotlottie-player>
                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Other skills </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.otherSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div>
              <div className='flex'>
                <div className='w-10 h-10 max-h-10'>
                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={personal}
                    style={{ height: '40px', width: 'auto', scale: '1.3' }}
                  >
                  </dotlottie-player>
                </div>
                <div className=''>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Personal </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.personalSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>


            <div>
              <div className='flex '>
                <div className='w-10 h-10 max-h-10 overflow-hidden'>
                  <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={professional}
                    style={{ height: '40px', width: 'auto', scale: '1.4' }}
                  >
                  </dotlottie-player>
                </div>
                <div className=''>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Professional </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    {
                      aboutMeModel ? aboutMeModel.skills.professionalSkills.map((skill) => {
                        return <li>{skill}</li>
                      }
                      ) : null
                    }
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-10'>


          <div >
            <p className='font-reef lg:mt-4 lg:mb-12 text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit '>Achievements</p>

            <div className='border-2 border-solid border-[var(--color-primary-accent)] tracking-[4px] 
                            pl-5 pr-10 py-3 
                            lg:pl-10 lg:pr-16 lg:py-6 
                            2xl:mr-32 mt-8
                            xl:mr-10
                            lg:mr-5'>
              <ol className='list-disc ml-10 text-justify'>
                {
                  aboutMeModel ? aboutMeModel.achievements.map((achievement) => {
                    return <li className='text-xs sm:text-sm lg:text-base mb-2'>{achievement}</li>
                  }
                  ) : null
                }
              </ol>
            </div>
          </div>

          <div >
            <p className='font-reef  
                          
                          mt-8 mb-8 
                          lg:mt-4 lg:mb-4 
                          
                          text-[var(--color-primary-white)] 
                          lg:text-xl tracking-[4px] 
                          sm:text-lg 
                          
                          xl:text-2xl 
                          
                          text-left min-w-fit grid grid-cols-1'>Primary Interest</p>
            <p className='tracking-[4px] leading-7 text-xs sm:text-sm text-justify mb-6 lg:mt-12 lg:mb-16'>{
              aboutMeModel ? aboutMeModel.primaryInterestStart : null
            } <span className='text-[var(--color-primary-accent-light)]'>{
              aboutMeModel ? aboutMeModel.primaryInterestHighlight : null
            }</span> {
                aboutMeModel ? aboutMeModel.primaryInterestEnd : null
              }</p>

            <DottedDiv height={120} width={dottedDivWidth} />

          </div>
        </article>

        <article id='educationArticle'>
          <div>
            <p className='font-reef lg:mt-14 lg:mb-4 text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit '>Education</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
              <div>
                <div id='pGDiplomaEducation' className='block mt-6 mb-10'>
                  <h2 className='text-sm sm:text-base lg:text-lg text-[var(--color-primary-white)] font-semibold font-reef tracking-[4px]'>{
                    aboutMeModel ? aboutMeModel.education.primaryEducation[0] : null
                  }
                  {
                    aboutMeModel ? aboutMeModel.education.primaryEducation[3] : null
                  }
                  </h2>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>{
                    aboutMeModel ? aboutMeModel.education.primaryEducation[1] : null
                  }</p>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>
                    {
                      aboutMeModel ? aboutMeModel.education.primaryEducation[2] : null
                    }
                  </p>
                </div>

                <div id='bTechEducation' className='block mt-6 lg:mb-10'>
                  <h2 className='text-sm sm:text-base lg:text-lg text-[var(--color-primary-white)] font-semibold font-reef tracking-[4px]'>{
                    aboutMeModel ? aboutMeModel.education.secondaryEducation[0] : null
                  }
                  {
                    aboutMeModel ? aboutMeModel.education.secondaryEducation[3] : null
                  }
                  </h2>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>
                    {
                      aboutMeModel ? aboutMeModel.education.secondaryEducation[1] : null
                    }
                  </p>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>
                    {
                      aboutMeModel ? aboutMeModel.education.secondaryEducation[2] : null
                    }
                  </p>
                </div>
              </div>
              <div className='lg:flex lg:justify-center text-xs sm:text-base'>
                <ButtonPrimary text="Explore my work" path="projects" variant="textBordered" border={true} />
              </div>

            </div>
          </div>
        </article>
        <Footer home={false} />
        <ScrollButton />
      </section>

    </AnimatedPage>
  )
}

export default AboutMe