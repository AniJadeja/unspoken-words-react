import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import { useNavigate } from 'react-router-dom'
import ProjectRow from '../Components/ProjectRow/ProjectRow'
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
import Footer from '../Components/Footer/Footer';
import ScrollButton from '../Components/ScrollButton/ScrollButton';
import gitHub from '../assets/github_logo.svg'

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([])
  useEffect(() => {
    try {
      getCurrentPageData().then((snapshot) => {
        setProjects(snapshot.projects);
      })
      .catch((error) => {
        navigate('/error');
      });
    } catch (error) {
      console.error(error);
    }
  }, [])



  return (
    <AnimatedPage>
      <div className='lg:mt-24' id='mainWrapper '>
        <p className='w-2 fixed lg:hidden bottom-32 right-3.5 opacity-60 text-center text-xs text-[var(--color-primary-white)]'> P r o j e c t s </p>
        {projects.map((project) => {
          const stringProject = JSON.stringify(project);
          const jsonProject = JSON.parse(stringProject);
          return (<ProjectRow project={jsonProject} />)
        })}
        <div className='mb-10 lg:mb-20 px-10'>
        <p className=' text-xs sm:text-base text-[var(--color-primary-white)]  tracking-[4px] align-center'>That is not all. Please checkout my git hub profile for more repositories.</p>
        <a href='https://www.github.com/AniJadeja' target='_blank' className='align-center'>
        <img src={gitHub} className='w-auto h-8 ml-2 mt-10' />
        </a>
          </div>
    
        <div className='flex justify-center text-xs sm:text-base text-[var(--color-primary-white)] mb-10 lg:mb-20'>
          <ButtonPrimary text="My Avocations" path="avocations" variant="textBordered" border={true} />
        </div>
        <Footer home={false} />
        <ScrollButton />
      </div>
    </AnimatedPage>
  )
}

export default Projects