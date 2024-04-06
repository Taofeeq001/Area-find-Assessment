import React from 'react'
import Reviewinfo from './Reviewinfo'
import ReviewImg from './ReviewImg'

const Review = () => {
    return (
        <div className='px-[5%] py-3 bg-[var(--secondary-color)] h-[100vh]'>
            <div className='flex lg:flex-row w-full lg:justify-between flex-col'>
                <div className='lg:w-[60%] w-full h-screen overflow-y-auto'>
                    <Reviewinfo/>
                </div>
                <div className='lg:w-[37%] w-full'>
                    <ReviewImg/>
                </div>
            </div>
        </div>
    )
}

export default Review