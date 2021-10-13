import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material'
import axios from 'axios'
import Button from '../components/profile-button/Button'
import add from '../assets/icons/add.svg'
import hamburger from '../assets/icons/burger.svg'
import dropdown from '../assets/icons/dropdown.svg'
import grid from '../assets/icons/Grid.svg'
import mentions from '../assets/icons/mentions.svg'
import mentionsGray from '../assets/icons/mentionsGray.svg'

const profileData = [
    {
        name: 'Post',
        number: '12'
    },
    {
        name: 'Followers',
        number: '759'
    },
    {
        name: 'Following',
        number: '99'
    },
]

const Profile = () => {

    const [postview, setPostview] = useState(true)
    const [images, setImages] = useState()

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setImages(res?.data?.hits)
            })
            .catch(() => { })
    }, [])

    return (
        <div>
            <div className="flex justify-between mx-4 items-center mt-2">
                <div className='flex'>
                    <h3 className="font-bold">john_w7</h3>
                    <img src={dropdown} alt="" className='ml-2' />
                </div>
                <div className=' flex'>
                    <img src={add} alt="add" className='mr-4' />
                    <img src={hamburger} alt="msg" />
                </div>
            </div>
            <div className="flex justify-center mx-4 items-center mt-4">
                <Avatar
                    alt="Travis Howard"
                    style={{ width: '70px', height: '70px' }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL880uAgBZkG1hUKl8vQN0DfNIv0YRj96cxp22gDG0gGNplEGtb_lOQpCzRqHHJzVt43g&usqp=CAU"
                />
                <div className='flex w-full pl-14 justify-around'>
                    {profileData.map((data, index) => {
                        return (
                            <div className='' key={index}>
                                <p className='font-bold text-lg text-center'>{data.number}</p>
                                <p className='font-normal -mt-1' style={{ fontSize: '13px' }}>{data.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-2 mx-4">
                <p className="font-bold" style={{ fontSize: '13px' }}>John wim</p>
                <p className='font-normal' style={{ fontSize: '13px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque officiis labore.</p>
                <Button
                    text="Edit Profile"
                />
            </div>
            <div className="flex mt-2">
                {postview ?
                    <div className="flex justify-center items-center w-1/2"
                        style={{ borderBottom: '1px solid blue' }}>
                        <img src={grid} alt="" onClick={() => setPostview(true)} />
                    </div> :
                    <div className="flex justify-center items-center w-1/2">
                        <img src={grid} alt="" onClick={() => setPostview(true)} />
                    </div>
                }
                {postview ?
                    <div className="flex justify-center items-center w-1/2">
                        <img src={mentionsGray} alt=""
                            onClick={() => setPostview(false)} />
                    </div> :
                    <div className="flex justify-center items-center w-1/2"
                        style={{ borderBottom: '1px solid blue' }}>
                        <img src={mentions} alt=""
                            onClick={() => setPostview(false)} />
                    </div>
                }
            </div>
            <div className='flex flex-wrap'>
                {postview ?
                    images?.map((img, index) => {
                        return (
                            <img key={index}
                                src={img.webformatURL}
                                alt=""
                                className=''
                                style={{ width: '33%', height: '33%' }}
                            />
                        )
                    })
                    : null}
            </div>
        </div>
    )
}

export default Profile
