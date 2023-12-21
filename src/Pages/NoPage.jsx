import React, {useEffect, useState} from 'react'
import { useRouteError } from 'react-router-dom'
import AnimatedPage from '../Components/Animated/AnimatedPage';
import { DotLottiePlayer } from '@dotlottie/player-component';

import professional from '../assets/lottie-icons/error.lottie'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
const NoPage = () => {

  const error = useRouteError();
  const { status, message } = error;
  const [ notFound, setNotFound ] = useState(false);
  console.log(
    error
  );

  useEffect(() => {
    if(status === 404) {
      setNotFound(true);
    }
  }, [status])

  return (
    <AnimatedPage>
      <div className='text-white min-h-full mt-24'>

        <div id="error-page" className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='align-center first-letter:'>
        {
          notFound ? (<p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 '>Looks like you are lost.. </p>) : (<p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0  '>Something went wrong :( </p>)
        }

        </div>
       
        <div className='align-center'>
          <dotlottie-player
                    autoplay
                    loop
                    mode="normal"
                    className='shadow-md shadow-[var(--color-primary-accent-shadow)]'
                    src={professional}
                    style={{ width:'500px',height:'auto' }}
                  >
                  </dotlottie-player>
        </div>
        <div className='align-center -mt-10 lg:mt-0'>
        {
          notFound ? (<p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit  lg:mt-0 mr-10 lg:mr-20 ml-10 lg:ml-0'>Don't worry !! just go to home...</p>) : (<p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit  ml-10 lg:ml-0 mr-10 lg:mr-20'>Don't Worry !! <p className='text-sm md:text-base font-inter leading-loose tracking-[2px] text-justify mt-4'> I am dedicatedly working Smart to solve your problems...</p></p>)
         }
         </div>
        </div>
        <div className='align-center mt-20'>
        <ButtonPrimary className="flex justify-center" text="Go to Home" path="" variant="textBordered" border={true} />
        </div>
        
      </div>
    </AnimatedPage>
  )
}

export default NoPage