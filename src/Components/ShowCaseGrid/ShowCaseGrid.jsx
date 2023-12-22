import React, { useState } from 'react'
import './ShowCaseGrid.css'

const ShowCaseGrid = ({ images }) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         className={'text-[var(--color-primary-white)] overflow-x-clip max-w-[1050px] pl-10 -mr-2' } >
            <div className='flex  '>
                <img id='img1' src={images[0]} alt='showcase img-1' className='ShowCaseImage mr-2 mt-2 mb-2' style={{objectFit: 'cover', width: '552px', height: '189px' }} />
                <img id='img2' src={images[1]} alt='showcase img-2' className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={{  objectFit: 'cover', width: '374px', height: '189px' }} />
                <img id='img3' src={images[2]} alt='showcase img-4' className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={{ objectFit: 'cover', width: '129px', height: '189px' }} />
            </div>
            <div className='flex '>
                <img id='img4' src={images[3]} alt='showcase img-3' className='ShowCaseImage mr-2 mt-2 mb-2' style={{  objectFit: 'cover', width: '374px', height: '189px' }} />
                <img id='img5' src={images[4]} alt='showcase img-5' className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={{  objectFit: 'cover', width: '420px', height: '189px' }} />
                <img id='img6' src={images[5]} alt='showcase img-6' className='ShowCaseImage ml-2 mr-2 mt-2 mb-2' style={{  objectFit: 'cover', width: '250px', height: '189px' }} />
            </div>
        </div>
    )
}

export default ShowCaseGrid