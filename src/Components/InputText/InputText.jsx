import React from 'react'
import './InputText.css'

const InputText = ({placeholder, onInputChange, isError,errorMessage, validator}) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const handleInput = (e) => {
        onInputChange(e.target.value)
    }

    return (
        <div>
            <p className={ 'InputText_Error '}>&nbsp;{errorMessage}</p>
            <input placeholder={placeholder} 
            
            className={
                isFocused ? 
                'InputText'
                :isError ? ' error' :' InputText'} 
            
        
            onChange={handleInput} onFocus={() => setIsFocused(true)}
            
            onBlur={(e) => {validator(e.target.value); setIsFocused(false)}} />
        </div>
    )
}

export default InputText