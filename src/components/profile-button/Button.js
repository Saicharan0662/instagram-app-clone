import React from 'react'

const Button = ({ text = 'click', ...otherprops }) => {
    return (
        <button className='w-full font-medium rounded mt-2'
            style={{ border: "1px solid black", fontSize: '13px', padding: '3px 0' }}
            {...otherprops}
        >
            {text}
        </button>
    )
}

export default Button
