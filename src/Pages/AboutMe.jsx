import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import { availableWidth } from '..';

import '../index.css'
import Footer from '../Components/Footer/Footer';
import otherTech from '../Assets/lottie-icons/other_tech.lottie'
import android from '../Assets/lottie-icons/android.lottie'
import webDev from '../Assets/lottie-icons/web_dev.lottie'
import personal from '../Assets/lottie-icons/personal.lottie'
import professional from '../Assets/lottie-icons/professional.lottie'
import uiUx from '../Assets/lottie-icons/ui_ux.lottie'
import { DotLottiePlayer } from '@dotlottie/player-component';

const AboutMe = () => {

  const introTextArticle = document.getElementById('introTextArticle');

  const [dottedDivWidth, setDottedDivWidth] = useState(250);
  const [dottedDivHeight, setDottedDivHeight] = useState(100);




  useEffect(() => {
    const introText = document.getElementById('introText');
    console.log("use Effect ran");
    if (introText) {
      if (availableWidth > 768) {
        setDottedDivWidth((introText.clientWidth));
        setDottedDivHeight(introText.clientHeight);
      }
      else {
        setDottedDivWidth(introText.clientWidth);

      }

      console.log("\nintroTextHeight : " + introText.clientHeight)
      //console.log("introTextWidth : " +introText.clientWidth)



      console.log("calculated dottedDivWidth : " + introText.clientWidth)
      // console.log("calculated dottedDivWidth : " + dottedDivWidth)

    }
    else {
      console.log("introText is unavailable")
    }
  })

  return (
    <AnimatedPage>
      <section id='aboutMePage' className='text-[var(--color-primary-white)]  px-10 lg:px-20 mt-5 lg:mt-[70px]'>

        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'>A b o u t &nbsp; M e</p>

        <article id='introTextArticle' className='grid grid-cols-1 gap-5 lg:grid-cols-2 font-inter tracking-[2px] text-justify'>
          <p id='introText' className='text-xs sm:text-sm' >Welcome to my digital playground, where pixels come to life and user experiences take center stage. A passionate front-end designer dedicated to crafting visually stunning and seamlessly functional websites. With a pixel-perfect eye for detail and a love for innovative design, I transform ideas into interactive digital journeys. </p>


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
                    style={{height:'40px', width:'auto'}}
                  >
                  </dotlottie-player>

                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-[var(--color-primary-accent)] '>Android </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      Java
                    </li>
                    <li>
                      Kotlin
                    </li>
                    <li>
                      Jetpack Compose
                    </li>
                    <li>
                      Firebase
                    </li>
                    <li>
                      Retrofit
                    </li>
                    <li>
                      API calls
                    </li>
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
                    style={{height:'40px', width:'auto'}}
                  >
                  </dotlottie-player>
                 
                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)] '>Web Development </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      HTML5/CSS3
                    </li>
                    <li>
                      Java Script
                    </li>
                    <li>
                      React JS framework
                    </li>
                    <li>
                      Tailwind CSS
                    </li>
                    <li>
                      Material UI
                    </li>
                    <li>
                      Firebase
                    </li>
                    <li>
                      Mongo DB
                    </li>
                    <li>
                      API
                    </li>
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
                    style={{height:'40px', width:'auto',scale:'1.3'}}
                  >
                  </dotlottie-player>
                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>UI/UX </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      Figma
                    </li>
                    <li>
                      Adobe Xd
                    </li>
                    <li>
                      User Research
                    </li>
                    <li>
                      Mockup
                    </li>
                    <li>
                      Prototyping
                    </li>
                    <li>
                      Minimal DesignS
                    </li>
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
                    style={{height:'40px', width:'auto', scale:'2'}}
                  >
                  </dotlottie-player>
                </div>
                <div>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Other skills </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      IOT
                    </li>
                    <li>
                      Machine Learning
                    </li>
                    <li>
                      Responsive Design
                    </li>
                    <li>
                      Code Management
                    </li>
                    <li>
                      MVC Architecture
                    </li>
                    <li>
                      Postman
                    </li>
                    <li>
                      Version Control
                    </li>
                    <li>
                      Git/GitHub
                    </li>
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
                    style={{height:'40px', width:'auto', scale:'1.3'}}
                  >
                  </dotlottie-player>
                </div>
                <div className=''>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Personal </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      Comminication
                    </li>
                    <li>
                      Critical Thinking
                    </li>
                    <li>
                      Time Management
                    </li>
                    <li>
                      Fast Learner
                    </li>
                    <li>
                      Adaptive
                    </li>
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
                    style={{height:'40px', width:'auto',scale:'1.4'}}
                  >
                  </dotlottie-player>
                </div>
                <div className=''>
                  <div className='flex items-center h-10 ml-2'>
                    <p className='text-base text-[var(--color-primary-accent)]'>Professional </p>
                  </div>
                  <ul className='list-disc ml-6'>
                    <li>
                      Team Leader
                    </li>
                    <li>
                      Collaboration
                    </li>
                    <li>
                      Problem Solving
                    </li>
                    <li>
                      Analyzing
                    </li>
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
                <li>
                  Participant of Summer Camp in Programming at ITMO University, Russia.
                </li>
                <li>
                  Short listed for Innovation Challenge Covid-19 Final
                </li>
                <li>
                  Short listed for smart Gujarat hackathon
                </li>
                <li>
                  Nominated For Smart India Hackathon
                </li>
                <li>
                  Participant of Vadodara Hackathon
                </li>
                <li>
                  Participant of Gesture Control Robotics
                </li>
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

            <p className='tracking-[4px] leading-7 text-xs sm:text-sm text-justify mb-6 lg:mt-12 lg:mb-16'>I am passionate about front-end web development, particularly UI/UX.
              With expertise in HTML, CSS, JavaScript, and front-end frameworks,
              I create visually appealing and user-friendly <span className='text-[var(--color-primary-accent-light)]'>Websites and Android Applications.</span>  I stay updated
              on industry trends to contribute my skills to meaningful projects.
              My goal is to craft impactful digital solutions for positive user
              experiences.</p>

            <DottedDiv height={120} width={dottedDivWidth} />

          </div>
        </article>

        <article id='educationArticle'>
          <div>
            <p className='font-reef lg:mt-14 lg:mb-4 text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit '>Education</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
              <div>
                <div id='pGDiplomaEducation' className='block mt-6 mb-10'>
                  <h2 className='text-sm sm:text-base lg:text-lg text-[var(--color-primary-white)] font-semibold font-reef tracking-[4px]'>Post Graduation Diploma (2023)</h2>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>Mobile Solutions Development</p>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>Conestoga College Waterloo, Ontario</p>
                </div>

                <div id='bTechEducation' className='block mt-6 lg:mb-10'>
                  <h2 className='text-sm sm:text-base lg:text-lg text-[var(--color-primary-white)] font-semibold font-reef tracking-[4px]'>Bachelor of Technology (2020)</h2>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>Computer Science and Engineering</p>
                  <p className='text-xs lg:text-base text-[var(--color-primary-gray)] tracking-[2px]'>Parul University, Gujarat</p>
                </div>
              </div>
              <div className='lg:flex lg:justify-center text-xs sm:text-base'>
                <ButtonPrimary text="Explore my work" path="projects" variant="textBordered" border={true} />
              </div>

            </div>
          </div>
        </article>
        <Footer home={false} />
      </section>

    </AnimatedPage>
  )
}

export default AboutMe