import React from 'react'
import { useHistory } from 'react-router'

const Menu = ({ options, setMenu }) => {
    const history = useHistory();

    return (
        <div className='py-4 fixed bottom-8 bg-white w-full rounded-t'>
            <div className='rounded-lg -mt-2 mx-auto'
                style={{ width: '50px', height: '6px', backgroundColor: 'gray' }}
                onClick={() => setMenu(false)}
            >
                <span ></span>
            </div>
            {options.map(option => {
                return (
                    <div className='py-2 px-2 font-semibold' style={{ fontSize: "14px" }}
                        onClick={() => history.push(option.path)}
                    >
                        {option.name}
                    </div>
                )
            })}

        </div>
    )
}

export default Menu
