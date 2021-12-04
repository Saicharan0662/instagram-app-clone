import React, { useContext } from 'react'
import leftArrow from '../assets/icons/leftArrow.png'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/GlobalState'

const Saved = () => {
    const history = useHistory();
    const { savedPost } = useContext(GlobalContext)
    console.log(savedPost)

    return (
        <div>
            <div className="flex mt-1 ml-1">
                <img src={leftArrow} alt="" className='h-5 mt-1 mr-2 ml-1'
                    onClick={() => history.push('/profile')}
                />
                <span className='text-lg font-semibold'>Saved</span>
            </div>
            <div className='flex flex-wrap'>
                {savedPost?.map(post => {
                    return (
                        <img key={post?.id}
                            src={post.post}
                            alt=""
                            className='pr-1'
                            style={{ width: '33%', height: '33%' }}
                        // onClick={() => handelExplorePost(img, 1)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Saved
