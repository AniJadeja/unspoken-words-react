import React, { useEffect, useState } from 'react'
import './ShowCaseGrid.css'
import { set } from 'firebase/database'


const ShowCaseGrid = ({ images, isRightAligned, screenSize }) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        if (screenSize < 768) setIsSmallScreen(true)
        else setIsSmallScreen(false)
    }, [screenSize])


    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={'text-[var(--color-primary-white)] overflow-x-clip max-w-[1050px] '}

            style={{
                marginLeft: isRightAligned ? 'auto' : '0',
                marginRight: isRightAligned ? '0' : 'auto',
            }}
        >
            <div className='flex overflow-scroll lg:overflow-hidden  mx-10 lg:mx-0'>
                <img id='img1' src={images ? images.img1.src : ""} alt={images ? images.img1.alt : ""} className='ShowCaseImage mr-2 mt-2 mb-2' style={images ? images.img1.style : null} />
                <img id='img2' src={images ? images.img2.src : ""} alt={images ? images.img2.alt : ""} className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={images ? images.img2.style : null} />
                <img id='img3' src={images ? images.img3.src : ""} alt={images ? images.img3.alt : ""} className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={images ? images.img3.style : null} />
            </div>
            <div className='flex overflow-scroll lg:overflow-hidden mx-10 lg:mx-0 ' style={{marginLeft:isRightAligned? '' : ( isSmallScreen ? '' : '-63px')
            }}>
                <img id='img4' src={images ? images.img4.src : ""} alt={images ? images.img4.alt : ""} className='ShowCaseImage mr-2 mt-2 mb-2' style={images ? images.img4.style : null} />
                <img id='img5' src={images ? images.img5.src : ""} alt={images ? images.img5.alt : ""} className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={images ? images.img5.style : null} />
                <img id='img6' src={images ? images.img6.src : ""} alt={images ? images.img6.alt : ""} className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={images ? images.img6.style : null} />
            </div>


        </div>
    )
}

export default ShowCaseGrid