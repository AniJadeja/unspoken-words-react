import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import ShowCaseGrid from '../Components/ShowCaseGrid/ShowCaseGrid'
import ArtsGallery from '../assets/arts-gallery.svg'
import LinesGallery from '../assets/lines-gallery.svg'
import AvocationsModel from '../models/AvocationsModel'

import { availableWidth } from '..'
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs'




const Avocations = () => {

  const [multiplyFactor, setMultiplyFactor] = useState(1)
  const [avocationsData, setAvocationsData] = useState({})


  useEffect(() => {
    if (availableWidth < 768) {
      setMultiplyFactor(0.7)
    } 

    getCurrentPageData().then((data) => {
      setAvocationsData(new AvocationsModel(data))
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <AnimatedPage>
      <div className='text-white'>
        <article id='introTextArticle' className='mt-8 lg:mt-16 px-10 lg:px-20 font-inter tracking-[2px] text-justify mb-12'>
          <p id='introText' className='text-xs sm:text-sm' >
            {
              avocationsData ? avocationsData.introParagraph : null
            }

          </p>
        </article>

        <article id='photographyArticle' className='px-10 lg:px-20 xl:px-40 font-inter tracking-[2px] text-justify mb-12'>
          <p className='font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12'>Photography</p>
          <p id='photographyText' className='text-xs sm:text-sm tracking-[2px]'>
            {
              avocationsData ? avocationsData.photographyPara : null
            }
          </p>
        </article>
        <article id='photographyGallery' className='grid lg:grid-cols-[30%_70%] mb-12'>
          <div className='flex mb-12 lg:mb-0'>
            <img src={ArtsGallery} alt='arts gallery' className='m-auto w-[40%] lg:w-[60%] 2xl:[70%] max-w-[70%]' />
          </div>
          <div className='lg:-mr-2' >
            
            <ShowCaseGrid images={avocationsData ? avocationsData.photographyImages : null} isRightAligned={true} screenSize={availableWidth} />
          </div>
        </article>
        <article id='photographyArticle' className='px-10 lg:px-20 xl:px-40 font-inter tracking-[2px] text-justify mb-12'>
          <p className='font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12'>Poetry</p>
          <p id='photographyText' className='text-xs sm:text-sm tracking-[2px]'>
            {
              avocationsData ? avocationsData.poetryPara : null
            }
          </p>
        </article>
        <article id='photographyGallery' className='grid lg:grid-cols-[70%_30%] mb-12'>
          <div className='lg:-ml-2 order-2 lg:order-1'>
            <ShowCaseGrid images={avocationsData ? avocationsData.poetryImages : null} isRightAligned={false} screenSize={availableWidth} />
          </div>
          <div className='flex mb-12 lg:mb-0 order-1 lg:order-2'>
            <img src={LinesGallery} alt='arts gallery' className='lg:m-auto xl:ml-0 xl:mr-auto sm:m-auto w-[40%] lg:w-[60%] 2xl:[70%] max-w-[70%] -rotate-[58deg] lg:rotate-0' />
          </div>
        </article>

      </div>
    </AnimatedPage>
  )
}

export default Avocations