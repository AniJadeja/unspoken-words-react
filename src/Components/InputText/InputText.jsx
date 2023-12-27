import React from 'react'
import './InputText.css'

const InputText = ({placeholder, onInputChange}) => {


    const handleInput = (e) => {
        onInputChange(e.target.value)
    }

    return (
        <div>
            <input placeholder={placeholder} className='InputText' onChange={handleInput}/>
        </div>
    )
}

export default InputText