import React from 'react'
import arrow from '../../assets/arrow.gif'
import { NavLink } from 'react-router-dom'

const ButtonPrimary = ({ text, path, variant, border }) => {
    if (variant === 'round') {
        return (
          <div className="max-w-fit">
            <NavLink to={"/" + path}>
              <button className="rounded-full bg-var(--color-primary-black) h-12 w-12 p-2 shadow-lg  bg-opacity-50 shadow-[var(--color-gradient-white)]">
                <img src={arrow} height={30} width={30} className="-rotate-90" alt="Arrow" />
              </button>
            </NavLink>
          </div>
        );
    }
    else if (variant == 'textBordered'){
        return (
            <div className="max-w-fit">
              
                <div>
                  <NavLink to={"/" + path}>
                    <button
                      className={
                        'bg-var(--color-primary-black) h-auto w-auto px-4 align-center mt-5 font-inter' +
                        (border ? ' border-[1px] border-solid border-[var(--color-primary-accent)] flex p-1' : ' border-0  pl-0 ')
                      }
                    >
                      <p className={(border ? "" : "mt-0")}>{text}</p>
                      <img src={arrow} height={30} width={30} className="-rotate-90 mt-1 ml-2" />
                    </button>
                  </NavLink>
                  {border ? "" : <div className="h-[1px] w-[96px] bg-[var(--color-primary-accent)] ml-2">&nbsp;</div>}
                </div>
              
            </div>
          )
    }

}

export default ButtonPrimary
