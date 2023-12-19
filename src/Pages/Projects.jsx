import React from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import ProjectRow from '../Components/ProjectRow/ProjectRow'



const Projects = () => {

 return (
    <AnimatedPage>
      <div className='mt-24' id='mainWrapper '>
      <ProjectRow/>
      </div>
    </AnimatedPage>
  )
}

export default Projects