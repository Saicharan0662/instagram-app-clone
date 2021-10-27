import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import Search from '../components/search/Search'
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router';

const Explore = () => {

    const { explorePostSetter } = useContext(GlobalContext)
    const history = useHistory()

    const [images, setImages] = useState()
    const [loading, setLoading] = useState(true)
    const loadingArray = new Array(18).fill(1)

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setImages(res?.data?.hits)
                setLoading(false)
            })
            .catch(() => { })
    }, [])

    const handelExplorePost = (post) => {
        const data = {
            user: post?.user,
            url: post?.webformatURL || post?.userImageURL,
            likes: post?.likes
        }
        explorePostSetter(data)
        history.push('/explorepost')
    }

    return (
        <div className=''>
            <Search />
            <div className="flex flex-wrap">
                {!loading ?
                    images?.map((img, index) => {
                        return (
                            <>
                                <img key={index}
                                    src={img.webformatURL}
                                    alt=""
                                    className='pr-1'
                                    style={{ width: '33%', height: '33%' }}
                                    onClick={() => handelExplorePost(img)}
                                />
                                <img key={index * 0.1 + 0.1}
                                    src={img.userImageURL}
                                    alt=""
                                    className='pr-1'
                                    style={{ width: '33%', height: '33%' }}
                                    onClick={() => handelExplorePost(img)}
                                />
                            </>
                        )
                    }) :
                    loadingArray?.map(index => {
                        return (
                            <>
                                <div style={{ width: '33%' }} key={index}>
                                    <Skeleton height={100} />
                                </div>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}

export default Explore
