import React from 'react'
import AnimatedPage from '../Components/Animated/AnimatedPage'
import ShowCaseGrid from '../Components/ShowCaseGrid/ShowCaseGrid'
import img1 from '../assets/show-case/img1.png'
import img2 from '../assets/show-case/img2.png'
import img3 from '../assets/show-case/img3.png'
import img4 from '../assets/show-case/img4.png'
import img5 from '../assets/show-case/img5.png'
import img6 from '../assets/show-case/img6.png'
import ArtsGallery from '../assets/arts-gallery.svg'
import LinesGallery from '../assets/lines-gallery.svg'

const Avocations = () => {

  const images = [
    img1,
    img2,
    img3,
    img6,
    img5,
    img4

  ]



  const avocations = {
    name: 'Avocations',
    introParagraph: 'A person’s interests can change drastically with time and it can affect his/her personality as well. One thing remains the same. No matter the person’s situation is, they always have some dreams and that dreams provides the backbone for developing different hobbies. Here are my hobbies which I am proud to have.',
    photographyPara: "Photography is one of the key factor in my life. Photos are the illustration or the combination of the colors which explains the same thing to everyone without needing to explain it. A saying 'A picture is worth a thousand words' is the best example for this comes to my mind."
  }



  return (
    <AnimatedPage>
      <div className='text-white'>
        <article id='introTextArticle' className='mt-8 lg:mt-16 px-10 lg:px-20 font-inter tracking-[2px] text-justify mb-12'>
          <p id='introText' className='text-xs sm:text-sm' >
            {
              avocations ? avocations.introParagraph : null
            }

          </p>
        </article>

        <article id='photographyArticle' className='px-10 lg:px-40 font-inter tracking-[2px] text-justify mb-12'>
          <p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 align-center mb-12'>Photography</p>
          <p id='photographyText' className='text-xs sm:text-sm tracking-[2px]'>
            {
              avocations ? avocations.photographyPara : null
            }
          </p>
        </article>
        <article id='photographyGallery' className='grid lg:grid-cols-[30%_70%] mb-12'>
          <div className='flex'>
            <img src={ArtsGallery} alt='arts gallery' className='ml-auto w-[70%]' />
          </div>
          <div className='ml-auto mr-0'>
            <ShowCaseGrid images={images} />
          </div>
        </article>

      </div>
    </AnimatedPage>
  )
}

export default Avocations