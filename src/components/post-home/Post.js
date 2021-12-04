import React, { useContext, useState } from 'react'
import { Avatar } from '@mui/material'
import { GlobalContext } from '../../context/GlobalState'
import menu from '../../assets/icons/menu.png'
import heart from '../../assets/icons/heart.svg'
import heartLiked from '../../assets/icons/heart.png'
import comment from '../../assets/icons/comment.svg'
import share from '../../assets/icons/share.svg'
import bookmarkDefault from '../../assets/icons/bookmark.svg'
import bookmarked from '../../assets/icons/bookmark.png'

const Post = (
    { id = '', avatar = "Name", username = "username", post = '', likes = 100, caption = "This is a caption.", ...otherprops }) => {

    const [liked, setLiked] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [likecount, setLikecount] = useState(likes)

    const { savePost, removePost, savedPost } = useContext(GlobalContext)

    const handelBookmarkNo = () => {
        setBookmark(false);
        if (id)
            removePost(id)

        console.log(savedPost)
    }

    const handelBookmarkYes = () => {
        setBookmark(true)
        const data = {
            id: post,
            avatar,
            username,
            post,
            likes,
            caption,
        }
        savePost(data)
    }

    return (
        <div {...otherprops}>
            <div className="flex justify-between mx-2">
                <div className="flex">
                    <Avatar
                        alt={username}
                        src={avatar}
                        style={{ width: '28px', height: '28px' }}
                    >{username[0]}</Avatar>
                    <p className='font-bold ml-2'>{username}</p>
                </div>
                <img src={menu} alt="" className='h-4' style={{ position: 'relative', top: '4.5px' }} />
            </div>
            <div className='w-full mt-1 flex justify-center items-center'>
                <img src={post} alt="" />
            </div>
            <div className="flex justify-between mt-1 mx-2">
                <div className="flex">
                    {liked ?
                        <img src={heartLiked} alt="" className='mr-2 h-6'
                            onClick={() => {
                                setLiked(!liked)
                                setLikecount(likecount - 1)
                            }} />
                        :
                        <img src={heart} alt="" className='mr-2'
                            onClick={() => {
                                setLiked(!liked)
                                setLikecount(likecount + 1)
                            }} />
                    }
                    <img src={comment} alt="" className='mr-2' />
                    <img src={share} alt="" className='mr-2' />
                </div>
                <div>
                    {bookmark ?
                        <img src={bookmarked} alt="" className='h-6' style={{ width: "24px", height: "22px" }} onClick={() => handelBookmarkNo()} /> :
                        <img src={bookmarkDefault} alt="" style={{ height: "22px" }} onClick={() => handelBookmarkYes()} />
                    }
                </div>
            </div>
            <div className='mx-2' style={{ fontSize: "13px" }}>
                <p className='font-bold'>{likecount} Likes</p>
                <p>
                    <span className='font-bold mr-1'>{caption ? username : null}</span>
                    <span>{caption}</span>
                </p>
            </div>
        </div>
    )
}

export default Post
