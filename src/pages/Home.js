import React from 'react'
import { Avatar, Badge } from '@mui/material'
import { styled } from '@mui/material/styles';
import igLogo from '../assets/icons/igLogo.svg'
import add from '../assets/icons/add.svg'
import messenger from '../assets/icons/messenger.svg'
import Post from '../components/post-home/Post';
import posts from '../data/HomePost'


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const users = [
    {
        name: 'John',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'Mike',
        avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        name: 'Merry',
        avatar: 'https://t3.ftcdn.net/jpg/02/99/03/56/360_F_299035676_iRQZfxrwzPFdRVRhCGAwyByXBlgNktpI.jpg'
    },
]

const Home = () => {
    return (
        <div>
            <div className="flex justify-between mt-2">
                <div className='ml-2'>
                    <img src={igLogo} alt="instagram" />
                </div>
                <div className='mr-2 flex'>
                    <img src={add} alt="add" className='mr-4' />
                    <img src={messenger} alt="msg" />
                </div>
            </div>
            <div className=' mt-2 flex overflow-x-auto'>
                <div className='ml-3'>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <SmallAvatar alt="+" src="+" style={{ width: '18px', height: '18px' }} />
                        }
                    >
                        <Avatar
                            alt="Travis Howard"
                            style={{ width: '59px', height: '59px' }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL880uAgBZkG1hUKl8vQN0DfNIv0YRj96cxp22gDG0gGNplEGtb_lOQpCzRqHHJzVt43g&usqp=CAU"
                        />
                    </Badge>
                    <p className='font-normal ml-1 mt-1' style={{ fontSize: '11.5px' }}>{'Your Story'}</p>
                </div>
                {users.map((user, index) => {
                    return (
                        <div className='ml-3' key={index}>
                            <Avatar
                                alt={user.name}
                                src={user.avatar}
                                style={{ width: '60px', height: '60px' }}
                            />
                            <p className=' font-normal ml-4 mt-1' style={{ fontSize: '11.5px' }}>{user.name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-2' />
            {posts.map((p, i) => {
                return (
                    <Post
                        avatar={p.avatar}
                        username={p.username}
                        post={p.post}
                        likes={p.likes}
                        caption={p.caption}
                        className={p.className}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Home
