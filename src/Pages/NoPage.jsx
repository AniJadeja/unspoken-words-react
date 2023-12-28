import React, {useEffect, useState} from 'react'
import { useRouteError } from 'react-router-dom'
import AnimatedPage from '../Components/Animated/AnimatedPage';
import { DotLottiePlayer } from '@dotlottie/player-component';

import professional from '../assets/lottie-icons/error.lottie'
import ButtonPrimary from '../Components/ButtonPrimary/ButtonPrimary';
const NoPage = () => {

  const error = useRouteError() || { status: 500, message: 'Something went wrong' };
  const { status } = error;

  
  const [diplayMessage, setDisplayMessage] = useState('Something went wrong :(');
  const [helpMessage, setHelpMessage] = useState('Don\'t worry !! I am dedicatedly working Smart to solve your problems...');

  useEffect(() => {
    if(status === 404) {
      setDisplayMessage('Looks like you are lost..')
      setHelpMessage('Don\'t worry !! just go to home...')
    }
  }, [status])

  return (
    <AnimatedPage>
      <div className='text-white min-h-full mt-24'>

        <div id="error-page" className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='align-center first-letter:'><p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit mt-10 lg:mt-0 ml-10 mr-10 lg:ml-0 lg:mr-0  '>{diplayMessage} </p>
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
          <p className='font-reef text-[var(--color-primary-white)] lg:text-xl tracking-[4px] sm:text-lg xl:text-2xl text-left min-w-fit  ml-10 lg:ml-0 mr-10 lg:mr-20'>{helpMessage}</p>
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