import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import DottedDiv from '../Components/DottedDiv/DottedDiv';
import { availableWidth } from '..';

const AboutMe = () => {

  const introTextArticle = document.getElementById('introTextArticle');
  
  const [dottedDivWidth,setDottedDivWidth] = useState(250);
  const [dottedDivHeight,setDottedDivHeight] = useState(100);

  
 

  useEffect(()=>{
    const introText = document.getElementById('introText');
    console.log("use Effect ran");
    if(introText)
    {
      if(availableWidth>768)
      {
        setDottedDivWidth((introText.clientWidth)-70);
        setDottedDivHeight(introText.clientHeight);
      }
      else{
        setDottedDivWidth(introText.clientWidth);
        
      }
      
      console.log("\nintroTextHeight : " + introText.clientHeight)
      //console.log("introTextWidth : " +introText.clientWidth)

    

      console.log("calculated dottedDivHeight : " + dottedDivHeight)
     // console.log("calculated dottedDivWidth : " + dottedDivWidth)
      
    }
    else{
      console.log("introText is unavailable")
    }
  })
  
  return (
    <AnimatedPage>
      <section id='aboutMePage' className='text-[var(--color-primary-white)]  px-10 lg:px-20 mt-5 lg:mt-[70px]'>
        <article id='introTextArticle' className='grid grid-cols-1 gap-5 lg:grid-cols-2 font-inter tracking-[2px] text-justify'>
          <p id='introText' >Welcome to my digital playground, where pixels come to life and user experiences take center stage. A passionate front-end designer dedicated to crafting visually stunning and seamlessly functional websites. With a pixel-perfect eye for detail and a love for innovative design, I transform ideas into interactive digital journeys. </p> 

          
          <div className="align-center">
            
          <DottedDiv id="dotDiv" height={dottedDivHeight} width={dottedDivWidth} /> 
          </div>
        </article>
      </section>
      
    </AnimatedPage>
  )
}

export default AboutMe