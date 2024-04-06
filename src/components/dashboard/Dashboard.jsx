'use client'
import React, { useState } from 'react'
import GeneralModal from '../modals/GeneralModal'

const Dashboard = () => {
    const [openfeedback, setOpenfeedback] = useState(false)

    const handleOpenModal = () => {
        setOpenfeedback(true)
    }
  return (
    <div className='flex flex-col w-full h-[100vh] items-center justify-center'>
        <div className='flex flex-col items-center gap-3 lg:px-[5%]'>
            <img src="/images/review.svg" alt="" />
            <p>Oops! No review yet</p>
            <div>
                <button onClick={handleOpenModal} className='flex uppercase bg-[var(--blue)] px-6 py-3 rounded-md text-white'>Leave a review</button>
            </div>
        </div>

        {
            openfeedback && (
                <GeneralModal
                    close={""}
                />
            )
        }
    </div>
  )
}

export default Dashboard