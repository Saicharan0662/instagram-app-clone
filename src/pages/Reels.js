import React from 'react'
import { Avatar } from '@mui/material'
import Button from '../components/reels-button/Button'
import reel1 from '../assets/reels/reel1.mp4'
import heart from '../assets/icons/heart.svg'
import comment from '../assets/icons/comment.svg'
import share from '../assets/icons/share.svg'
import menu from '../assets/icons/menu.png'
import leftArrow from '../assets/icons/leftArrow.png'
import camera from '../assets/icons/camera.png'

const Reels = () => {
    return (
        <>
            <div className="relative">
                <div className='absolute top-2 w-full flex justify-between'>
                    <div className='flex'>
                        <img src={leftArrow} alt="" className='h-6 ml-2' style={{ filter: 'invert(1)' }} />
                        <p className='mx-4 text-m text-white'>Reels</p>
                    </div>
                    <img src={camera} alt="" className='h-7 mr-2' style={{ filter: 'invert(1)' }} />
                </div>
                <video src={reel1} autoPlay loop controls={false} />
                <div className='absolute bottom-14'>
                    <div className='flex'>
                        <Avatar
                            alt={'j'}
                            style={{ width: '24px', height: '24px', marginLeft: '2px' }}
                        >{'j'}</Avatar>
                        <span className='text-white mx-4 text-s'>jack_90</span>
                        <Button
                            text="Follow"
                        />
                    </div>
                    <p className='text-white text-xs ml-4 relative top-2'>This is a caption</p>
                </div>
                <div className='absolute bottom-6 right-2 flex flex-col justify-around' style={{ height: '180px' }}>
                    <img src={heart} alt="" className='h-7' style={{ filter: 'invert(1)' }} />
                    <img src={comment} alt="" className='h-7' style={{ filter: 'invert(1)' }} />
                    <img src={share} alt="" className='h-7' style={{ filter: 'invert(1)' }} />
                    <img src={menu} alt="" className='h-5' style={{ filter: 'invert(1)' }} />
                </div>
            </div>
        </>
    )
}

export default Reels
