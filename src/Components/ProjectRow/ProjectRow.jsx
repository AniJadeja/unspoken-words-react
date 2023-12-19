import React from 'react'
import MockupImages from '../MockupImages/MockupImages.jsx'
import UnspokenWordsHome from '../../assets/project-unspoken-words/unspoken-words-home.png'
import UnspokenWordsAvocations from '../../assets/project-unspoken-words/unspoken-words-avocations.png'
import UnspokenWordsResume from '../../assets/project-unspoken-words/unspoken-words-resume.png'

const ProjectRow = () => {
  const images = [UnspokenWordsHome, UnspokenWordsAvocations, UnspokenWordsResume];

  const isTwoColumnView = (window.innerWidth < 1024) ? true : false;

  return (
    <div id='outerWrapper' className='rowWrapper grid grid-cols-1 xl:grid-cols-2 text-white'>
      {/* <div id='firstColumnWrapper' className="firstColumnWrapper pr-20 align-center"> */}
    
      <div id='firstColumnWrapper' className="firstColumnWrapper flex flex-col w-11/12 pl-40">
   
        {/* <div id='mockupImagesWrapper' className='mockpImagesWrapper flex mt-20'>
        <MockupImages images={images} isTwoColumnView={isTwoColumnView}  />
        </div> */}
         <div>   <p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit'>Unspoken Words</p></div>
        <div id='mockupImagesWrapper' className='mockpImagesWrapper flex mt-12'>
        <MockupImages images={images} isTwoColumnView={isTwoColumnView}  />
        </div>
        
      </div>
      <div className='secondColumnWrapper w-11/12'>
        <div>   <p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit'>Description</p></div>
        <div>
          <p className='text-sm md:text-base font-inter leading-loose tracking-[2px] text-justify mt-12' style={{lineHeight:'1.8'}}>Project “Unspoken Words” is a portfolio website that represents my self to the best without meeting me. This website is a combination of my thoughts and ideology I follow, while keeping the information as minimal as possile. I designed this website to be a full scale project where this could have been a product itself. As I like to work on UI Design, I have created a perfect blend of my belief and learning. The aim of this project is to lead users to focus on who I am and what I can do without any distractions. This project engages users by providing necessary information with subtle animations to make it interesting enough. </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectRow