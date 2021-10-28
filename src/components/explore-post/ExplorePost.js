import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalState';
import Post from '../post-home/Post';
import leftArrow from '../../assets/icons/leftArrow.png'

const ExplorePost = () => {

    const { explorePost } = useContext(GlobalContext)
    const history = useHistory()

    return (
        <div>
            <div className="flex mt-1 ml-1">
                <img src={leftArrow} alt="" className='h-5 mt-1 mr-2 ml-1'
                    onClick={() => history.push('/explore')}
                />
                <span className='text-lg font-semibold'>Explore</span>
            </div>
            <div className="mt-2">
                <Post
                    avatar={null}
                    username={explorePost.user}
                    post={explorePost.url}
                    likes={explorePost.likes}
                    caption={''}
                />
            </div>
        </div>
    )
}

export default ExplorePost
