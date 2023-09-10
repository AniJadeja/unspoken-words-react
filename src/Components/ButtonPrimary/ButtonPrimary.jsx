import React from 'react'
import arrow from '../../Assets/arrow.gif'
import { NavLink } from 'react-router-dom'
const ButtonPrimary = ({ text, path }) => {
    return (
        <div className='max-w-fit'>
            <button className='bg-[var(--color-primary-black)] h-auto w-auto px-4 align-center mt-5 pl-0 font-inter' >
                <NavLink
                to={"/"+path}>
                {text}
                </NavLink>
                <img src={arrow} height={30} width={30} className='-rotate-90 mt-1 ml-2' />
            </button>
            <div className='h-[1px] w-[96px] bg-white ml-2'>&nbsp;</div>
        </div>

    )
}

export default ButtonPrimary