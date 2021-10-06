import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import Search from '../components/search/Search'

const APIKEY = ''

const Explore = () => {

    const [images, setImages] = useState()
    const [loading, setLoading] = useState(true)
    const loadingArray = new Array(18).fill(1)

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${APIKEY}`)
            .then((res) => {
                setImages(res?.data?.hits)
                setLoading(false)
            })
            .catch(() => { })
    }, [])

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
                                />
                                <img key={index * 0.1 + 0.1}
                                    src={img.userImageURL}
                                    alt=""
                                    className='pr-1'
                                    style={{ width: '33%', height: '33%' }}
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
