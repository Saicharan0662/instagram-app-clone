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

    const handelExplorePost = (post, toggler) => {
        let data = {}
        if (toggler === 1) {
            data = {
                user: post?.user,
                url: post?.webformatURL,
                likes: post?.likes
            }
        }
        else {
            data = {
                user: post?.user,
                url: post?.userImageURL,
                likes: post?.likes
            }
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
                                    onClick={() => handelExplorePost(img, 1)}
                                />
                                <img key={index * 100 + 1}
                                    src={img.userImageURL}
                                    alt=""
                                    className='pr-1'
                                    style={{ width: '33%', height: '33%' }}
                                    onClick={() => handelExplorePost(img, 0)}
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
