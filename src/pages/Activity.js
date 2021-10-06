import React from 'react'
import { Avatar, AvatarGroup } from '@mui/material'

const dummyActivity = [
    {
        src1: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        src2: 'https://t3.ftcdn.net/jpg/02/99/03/56/360_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg',
        name1: 'mike',
        name2: 'merrry',
        time: '3d'
    },
    {
        src1: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        src2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsA_Zporz0-9MEbfbBYbDBVYU5qUtK3d_QOA&usqp=CAU',
        name1: 'mike',
        name2: 'elena_06',
        time: '4d'
    },
    {
        src1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnN5KvOyXrsb_9XJp5Ndy87UU9xCVdbqGcg&usqp=CAU',
        src2: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name1: 'john_.12',
        name2: 'merrry',
        time: '5d'
    },
]

const Activity = () => {
    return (
        <div>
            <h2 className="font-bold text-xl m-2">Activity</h2>
            <div>
                <h4 className="text-gray-500 font-medium ml-2 my-5" style={{ fontSize: '13px' }}>Today</h4>
                <div className='flex ml-2 text-xs items-center mt-2'>
                    <Avatar
                        alt={'John'}
                        src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                        style={{ width: '38px', height: '38px' }}
                    />
                    <p className='ml-3 text-black'>
                        <span className='font-bold'> john </span> started following you. <span className='text-gray-500 text-xs'>2h</span>
                    </p>
                </div>
                <div className='flex ml-2 text-xs items-center mt-2'>
                    <Avatar
                        alt={'Merry'}
                        src={'https://t3.ftcdn.net/jpg/02/99/03/56/360_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg'}
                        style={{ width: '38px', height: '38px' }}
                    />
                    <p className='ml-3 text-black'>
                        <span className='font-bold'> merry </span> liked your post. <span className='text-gray-500 text-xs'>5h</span>
                    </p>
                </div>
            </div>
            <div>
                <h4 className="text-gray-500 font-medium ml-2 my-5" style={{ fontSize: '13px' }}>This week</h4>
                {dummyActivity.map((feed, index) => {
                    return (
                        <div className='flex ml-2 text-xs items-center mt-4' key={index}>
                            <div className='' style={{ transform: "rotate(25deg)" }}>
                                <AvatarGroup max={2}>
                                    <Avatar
                                        alt={feed.name1}
                                        src={feed.src1}
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                    <Avatar
                                        alt={feed.name2}
                                        src={feed.src2}
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                </AvatarGroup>
                            </div>
                            <p className='ml-3 text-black'>
                                <span className='font-bold'> {feed.name1} </span> and <span className='font-bold'> {feed.name2} </span> liked your post. <span className='text-gray-500 text-xs'>{feed.time}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Activity