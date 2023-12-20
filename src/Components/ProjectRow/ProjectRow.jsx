import React from 'react'
import MockupImages from '../MockupImages/MockupImages.jsx'
import '../../index.css'
import star from '../../assets/star.svg'


const ProjectRow = ({project}) => {

  const isTwoColumnView = (window.innerWidth < 1024) ? true : false;

  if(!project) {
    return (<div>Project</div>);
  }

  return (
    <div id='outerWrapper' className='rowWrapper grid grid-cols-1 xl:grid-cols-2 text-[var(--color-primary-white)] p-10 lg:px-20'>
      <div id='firstColumnWrapper' className="firstColumnWrapper flex flex-col  ">
        <div className=''>
          <p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-xs xl:text-sm text-left min-w-fit'>Project Name : <p className='font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit' > {
            project.name
          }</p></p>
        </div>
        <div id='mockupImagesWrapper' className='mockpImagesWrapper flex mt-12  pl-20  

        sm:min-h-[280px]

        sm2:pl-16

        lg:pl-28 
        lg:mt-20
        lg:min-h-[400px]

        xl:pl-16
        xl:min-h-[280px]

        2xl:min-h-[380px]
        2xl:mt-12
        2xl:pl-28'>

          <MockupImages images={project.images} isTwoColumnView={isTwoColumnView} isDarken={project.isDarken} />
        </div>
        <div className='block 2xl:flex lg:mt-16 2xl:mt-8'>
        <div>
          <p className='inline font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left mt-5 lg:mt-0'>Technologies used</p><p className='text-2xl hidden 2xl:inline'>&nbsp;:</p>
          </div>
          <div className='flex lg:block lg:mb-10 xl:mb-0 mb-0 2xl:flex mt-2 -ml-5 2xl:ml-0 2xl:mt-0'>
            {
            project.technologies.map((technology) => {
              return <div className='flex mt-2 lg:mt-10 2xl:mt-0 ml-5'>
              <img src={technology.icon} alt="firebase logo" className='screen' height={20} width={20}/>
              <p className='font-inter text-sm lg:text-base tracking-[2px] text-left mt-2 ml-4'>{technology.name}</p>
            </div>
            }
            )
          }
          </div>
        </div>
      </div>
      <div className='secondColumnWrapper'>
        <div
        ><p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0'>Description {window.innerWidth}</p></div>
        <div className=''>
          <p id='projectDescription' className='text-sm md:text-base font-inter leading-loose tracking-[2px] text-justify mt-12' style={{ lineHeight: '1.8' }}>{project.description}</p>
        </div>
        <div className='grid grid-cols-2 max-w-[100%] mt-5 2xl:mt-14 -ml-5'>
        {
            project.features.map((feature) => {
              return <div className='flex mt-5 ml-5'>
              <img src={star} alt="firebase logo" className='screen'style={{
                height: '30px',
                width: '30px',
                mixBlendMode: 'lighten',
              }}/>
              <p className='font-inter text-sm lg:text-base tracking-[2px] text-left mt-1 ml-4'>{feature}</p>
            </div>
            }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectRow