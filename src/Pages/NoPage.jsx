import React from 'react'
import { useRouteError } from 'react-router-dom'

const NoPage = () => {

  const error = useRouteError();
  console.log(
      error
  );
  return (
    <div className='text-white'>NoPage Page Displayed
    
    <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
            <i className='text-red-600 text-2xl '>
                {error.statusText || error.message}
            </i>
        </p>
    </div></div>
  )
}

export default NoPage