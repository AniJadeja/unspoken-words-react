import React from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import ProjectRow from '../Components/ProjectRow/ProjectRow'
import UnspokenWordsHome from '../assets/project-unspoken-words/unspoken-words-home.png'
import UnspokenWordsAvocations from '../assets/project-unspoken-words/unspoken-words-avocations.png'
import UnspokenWordsResume from '../assets/project-unspoken-words/unspoken-words-resume.png'
import ProjectModel from '../models/ProjectModel.js'
import firebaseIcon from '../assets/firebase.svg'
import reactIcon from '../assets/react.svg'
import home from '../assets/tripwiz-home.png'
import signup from '../assets/tripwiz-signup.png'
import trip from '../assets/tripwiz-trip.png'

const Projects = () => {

  const projects = {
    name: 'Unspoken Words',
    description: 'Project “Unspoken Words” is a portfolio website that represents my self to the best without meeting me. This website is a combination of my thoughts and ideology I follow, while keeping the information as minimal as possile. I designed this website to be a full scale project where this could have been a product itself. This project is connected with Google Firebase Realtime database to support the dynamic nature of the data. As I like to work on UI Design, I have created a perfect blend of my belief and learning. The aim of this project is to lead users to focus on who I am and what I can do without any distractions. This project engages users by providing necessary information with subtle animations to make it interesting enough.',
    images: [home, signup, trip],
   // images: [UnspokenWordsHome, UnspokenWordsAvocations, UnspokenWordsResume],
    technologies :[{
      icon : firebaseIcon,
      name : 'Firebase'
    },{
      icon : reactIcon,
      name : 'React JS'
    }],
    features : ["User Centric", "Responsive", "Dynamic", "Minimalistic"],
    isDarken : false
  }

  const project = new ProjectModel(projects);
 return (
    <AnimatedPage>
      <div className='lg:mt-24' id='mainWrapper '>
      <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> P r o j e c t s </p>
      <ProjectRow project={project}/>
      </div>
    </AnimatedPage>
  )
}

export default Projects