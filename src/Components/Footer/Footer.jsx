import React from 'react'
import { projectName } from '../..'

const Footer = ({home}) => {
  return (
    <div> {/* Footer */}
    <footer id='footer' className={'w-full grid lg:grid-cols-2 h-16 lg:mb-4' + (home ? ' absolute bottom-0' : '') } >
    <p className='mx-auto font-reef text-[var(--color-primary-gray)] align-center tracking-[4px] text-sm lg:text-lg xl:text-xl'>Project : {projectName}</p>
      <p className='mx-auto font-reef text-[var(--color-primary-gray)] hidden lg:flex lg:align-center tracking-[4px] text-sm lg:text-lg xl:text-xl'>Built from scratch by me .{")"}</p>
    </footer></div>
  )
}

export default Footer