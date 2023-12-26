import React, { useEffect, useState } from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import ShowCaseGrid from '../Components/ShowCaseGrid/ShowCaseGrid'
import ArtsGallery from '../assets/arts-gallery.svg'
import LinesGallery from '../assets/lines-gallery.svg'
import AvocationsModel from '../models/AvocationsModel'

import { getAvailableWidth } from '..'
import { getCurrentPageData } from '../firebase/manageRealtimeDatabase.mjs'
import ScrollButton from '../Components/ScrollButton/ScrollButton'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary'




const Avocations = () => {

  const [multiplyFactor, setMultiplyFactor] = useState(1)
  const [avocationsData, setAvocationsData] = useState({})
  const [isGamingImageHovered, setIsGamingImageHovered] = useState(false)
  const [isAnimeImageHovered, setIsAnimeImageHovered] = useState(false)
  const [isSmallerScreen, setIsSmallerScreen] = useState(false)
  const availableWidth = getAvailableWidth()

  const handleGamingImageHover = () => {
    setIsGamingImageHovered(true)
  }

  const handleGamingImageLeave = () => {
    setIsGamingImageHovered(false)
  }

  const handleAnimeImageHover = () => {
    setIsAnimeImageHovered(true)
  }

  const handleAnimeImageLeave = () => {
    setIsAnimeImageHovered(false)
  }


  const gamingImageStyle = {
    filter: 'grayscale(100%) opacity(0.8)',
    transition: 'all 0.3s ease-in-out',
    width: isSmallerScreen ? '100%' : '80%',
    scale: isSmallerScreen ? '1.10' : '1.0',
  }

  const gamingImageHoverStyle = {
    filter: 'grayscale(0%) opacity(1)',
    transition: 'all 0.3s ease-in-out',
    width: isSmallerScreen ? '100%' : '80%',
    scale: isSmallerScreen ? '1.15' : '1.05',

  }


  const animeImageStyle = {
    filter: 'grayscale(100%) opacity(0.8)',
    transition: 'all 0.3s ease-in-out',
  }

  const animeImageHoverStyle = {
    filter: 'grayscale(0%) opacity(1)',
    transition: 'all 0.3s ease-in-out',
    scale: '1.05',
  }


  useEffect(() => {
    if (availableWidth < 768) {
      console.log('smaller screen detected')
      setIsSmallerScreen(true)
      setMultiplyFactor(0.7)
    }

    getCurrentPageData().then((data) => {

      Object.keys(data.photographyImages).forEach((key) => {
        const width = parseInt(data.photographyImages[key].style.width, 10);
        const height = parseInt(data.photographyImages[key].style.height, 10);


        data.photographyImages[key].style = {
          width: `${width * multiplyFactor}px`,
          height: `${height * multiplyFactor}px`,
        };

      });

      Object.keys(data.poetryImages).forEach((key) => {
        const width = parseInt(data.poetryImages[key].style.width, 10);
        const height = parseInt(data.poetryImages[key].style.height, 10);

        data.poetryImages[key].style = {
          width: `${width * multiplyFactor}px`,
          height: `${height * multiplyFactor}px`,
        };
      }
      );

      data.gamingImage.style = {
        width: `${parseInt(data.gamingImage.style.width, 10) * multiplyFactor}px`,
        height: `${parseInt(data.gamingImage.style.height, 10) * multiplyFactor}px`,
      };

      setAvocationsData(new AvocationsModel(data))

      //  / console.log(data)
    })
  }, [multiplyFactor])


  return (
    <AnimatedPage>
      <div className='text-white -pb-12'>
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
        <article id='photographyGallery' className='grid lg:grid-cols-[30%_70%] mb-12 overflow-x-hidden'>
          <div className='flex mb-12 lg:mb-0'>
            <img src={ArtsGallery} alt='arts gallery' className='lg:m-auto 2xl:mr-0 xl:ml-auto sm:m-auto w-[40%] lg:w-[60%] 2xl:[70%] max-w-[70%]' />
          </div>
          <div className='lg:-mr-2' >

            <ShowCaseGrid images={avocationsData ? avocationsData.photographyImages : null} isRightAligned={true} screenSize={availableWidth} />
          </div>
        </article>
        <article id='poetryArticle' className='px-10 lg:px-20 xl:px-40 font-inter tracking-[2px] text-justify mb-12'>
          <p className='font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12'>Poetry</p>
          <p id='photographyText' className='text-xs sm:text-sm tracking-[2px]'>
            {
              avocationsData ? avocationsData.poetryPara : null
            }
          </p>
        </article>
        <article id='poetryGallery' className='grid lg:grid-cols-[70%_30%] mb-12'>
          <div className='lg:-ml-2 order-2 lg:order-1'>
            <ShowCaseGrid images={avocationsData ? avocationsData.poetryImages : null} isRightAligned={false} screenSize={availableWidth} />
          </div>
          <div className='flex mb-12 lg:mb-0 order-1 lg:order-2'>
            <img src={LinesGallery} alt='arts gallery' className='lg:m-auto 2xl:ml-0 xl:mr-auto sm:m-auto w-[40%] lg:w-[60%] 2xl:[70%] max-w-[70%] -rotate-[58deg] lg:rotate-0' />
          </div>
        </article>
        <article id='gamingArticle' className='px-10 lg:px-20 xl:px-40 font-inter tracking-[2px] text-justify mb-12'>
          <p className='font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12 align-center'>Gaming</p>

          <p id='gamingText' className='text-xs sm:text-sm tracking-[2px]'>
            {
              avocationsData ? avocationsData.gamingPara : null
            }
          </p>
          {avocationsData.gamingImage ?
            <div className='w-full flex align-center'>
              <img src={avocationsData.gamingImage.src}
                alt={avocationsData.gamingImage.alt}
                onMouseEnter={handleGamingImageHover}
                onMouseLeave={handleGamingImageLeave}
                className='mt-10'
                style={isGamingImageHovered ? gamingImageHoverStyle : gamingImageStyle} />
            </div> : null}
        </article>
        <article id="animeArticle" className="px-10 lg:px-20 xl:px-40 font-inter tracking-[2px] text-justify">
          <p className="font-reef text-[var(--color-primary-accent)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12">Anime</p>
          <p id="animeText" className="text-xs sm:text-sm tracking-[2px]">
            {
              avocationsData ? avocationsData.animePara : null
            }
          </p>
          <div className="w-full max-w-full flex-col flex lg:flex-row">
          {avocationsData.animeImage ? <img src={avocationsData.animeImage.src} alt={avocationsData.animeImage.alt} className="mt-12 lg:w-3/4  " style={isAnimeImageHovered ? animeImageHoverStyle : animeImageStyle} onMouseEnter={handleAnimeImageHover} onMouseLeave={handleAnimeImageLeave} /> : null}
          <div className="m-auto mt-8 mb-8 lg:m-auto">
          <ButtonPrimary text='Resume' link='/resume' variant="textBordered" border={true}/>
          </div>
          </div>
        </article>
        <ScrollButton />
        
      </div>
    </AnimatedPage>
  )
}


export default Avocations