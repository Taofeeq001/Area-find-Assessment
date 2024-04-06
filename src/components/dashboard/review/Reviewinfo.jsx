import React from 'react'
import { review } from '../data'

const Reviewinfo = () => {
    return (
        <div className='flex flex-col gap-4'>
            {
                review.map((rev, index) => (
                    <div key={index}>
                        <div className='border-b py-4' >
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-1 items-center'>
                                    <img src={rev.img} alt="" />
                                    <span className='flex flex-row items-center'>
                                        <b>{rev.name}</b>
                                        <p>{rev.duration}</p>
                                    </span>
                                </div>
                                <div className='flex flex-row items-center gap-1'>
                                    <img src={rev.rate} alt="" />
                                    <p>{rev.rateNo}</p>
                                </div>

                            </div>
                            <div>
                                <p>{rev.description}</p>
                                <div className='flex flex-row gap-3'>
                                    <span className='flex flex-row items-center'>
                                        <img src={rev.like} alt="" />
                                        <p>{rev.like_no}</p>
                                    </span>
                                    <span className='flex flex-row items-center'>
                                        <img src={rev.dislike} alt="" />
                                        <p>{rev.dislike_no}</p>
                                    </span>
                                    <span className='flex flex-row items-center'>
                                        <img src={rev.comment} alt="" />
                                        <p>{rev.comment_no}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Reviewinfo