import React from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import MockupImages from '../Components/MockupImages/MockupImages'
import UnspokenWordsHome from '../Assets/project-unspoken-words/unspoken-words-home.png'
import UnspokenWordsAvocations from '../Assets/project-unspoken-words/unspoken-words-avocations.png'
import UnspokenWordsResume from '../Assets/project-unspoken-words/unspoken-words-resume.png'
import Waves from '../Components/AnimatedWaves/AnimateWaves'
import Lottie from 'lottie-react';



const Projects = () => {

  const images = [UnspokenWordsHome, UnspokenWordsAvocations, UnspokenWordsResume];

  return (
    <AnimatedPage>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-white'>

        <div className='relative h-[600px] min-h-[600px] max-h-[600px]'>
          <div className='mt-64 mx-52 w-1/3 flex' >
            <MockupImages images={images} className="image-container" />
          </div>
          {/* <p className='h-20' style={{ boxShadow: '0px -25px 20px 5px var(--color-primary-accent)' }}>&nbsp;</p> */}
          <div style={{height:'80px', overflow:'clip'}} >
          <Waves className='relative bottom' style/>
          </div>
        </div>
        <div className='h-full'>
          Second Div
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Projects