import React from 'react'

const Button = ({ text = 'click', ...otherprops }) => {
    return (
        <button className='w-full font-medium rounded text-white'
            style={{ border: "1px solid white", fontSize: '10px', padding: '3px 6px' }}
            {...otherprops}
        >
            {text}
        </button>
    )
}

export default Button
