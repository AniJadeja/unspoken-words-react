import React, { useState, useEffect, useRef } from 'react'
import arrow from '../../assets/arrow_cropped.gif'

const ScrollButton = () => {

    const [isScrolled, setIsScrolled] = useState(0);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    const scroll = useRef(0);
    const scrollToTop = () => {
        if (isScrolled == 0) return;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scroll.current = scrollY || document.documentElement.scrollTop;
            if (scrollY < 100) {
                setIsScrolled(0);
                setIsScrolledToBottom(false);
                return;
            }

            if (scrollY > 100 && window.scrollY < 2100) {
                setIsScrolled(1);
                setIsScrolledToBottom(false);
                return;
            }

            if (scrollY > 2100) {
                setIsScrolled(-1);
                setIsScrolledToBottom(true);
                return;
            }



    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (

        <div className='fixed bottom-0 w-screen h-5 max-w-[var(--max-width)]'>
            
        <button className={'p-4 absolute bottom-12 right-4 z-50 w-30 h-30 bg-[var(--color-primary-black)] rounded-full lg:flex justify-center items-center'}
            style={{
                    boxShadow: '2px 2px 20px 5px var(--color-primary-accent-shadow)',
                    opacity: isScrolledToBottom ? 0 : 1,
                    pointerEvents: isScrolledToBottom ? 'none' : 'all',
                    transition: 'opacity 0.5s ease-in-out',
                }}
                onClick={
                    isScrolledToBottom ? null :scrollToTop}> <img src={arrow}
                    style={{
                        transition: 'all 0.3s ease-in-out',
                        height: '15px',
                        width: '15px'

                    }} className={
                        (isScrolled) ? 'clip rotate-180' : 'clip rotate-0'
                    } /></button>
        </div>
    )
}

export default ScrollButton