import React from 'react'
import search from '../../assets/icons/Search.svg'

const Search = () => {
    return (
        <div className='rounded-lg bg-gray-100 mx-3 my-3 flex items-center'>
            <img src={search} alt="" className='h-3 mx-4' />
            <input
                type='text'
                className='py-2 text-xs font-medium text-gray-400 bg-gray-100 w-full'
                placeholder='Search'
                style={{ outline: "none" }}
            />
        </div>
    )
}

export default Search
