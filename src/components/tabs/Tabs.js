import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import home from '../../assets/icons/Home.svg'
import search from '../../assets/icons/Search.svg'
import reels from '../../assets/icons/Reels.svg'
import heart from '../../assets/icons/heart.svg'

const Tabs = () => {
    return (
        <div className='bg-white flex justify-around items-center fixed bottom-0 w-full'
            style={{ height: '42px', zIndex: '10' }}
        >
            <Link to='/'>
                <img src={home} alt="" className='h-6' />
            </Link>
            <Link to='/explore'>
                <img src={search} alt="" className='h-6' />
            </Link>
            <img src={reels} alt="" className='h-6' />
            <Link to='/activity'>
                <img src={heart} alt="" className='h-6' />
            </Link>
            <Link to='/profile'>
                <Avatar
                    alt='Profile'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL880uAgBZkG1hUKl8vQN0DfNIv0YRj96cxp22gDG0gGNplEGtb_lOQpCzRqHHJzVt43g&usqp=CAU'
                    style={{ width: '22px', height: '22px' }}
                />
            </Link>
        </div>
    )
}

export default Tabs
