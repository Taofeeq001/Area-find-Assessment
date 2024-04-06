import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full h-[90vh] items-center justify-center'>
        <div className='flex flex-col items-center gap-3'>
            <img src="/images/review.svg" alt="" />
            <p>Oops! No review yet</p>
            <div>
                <button className='flex uppercase bg-[var(--blue)] px-6 py-3 rounded-md text-white'>Leave a review</button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard