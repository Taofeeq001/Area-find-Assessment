'use client'
import React, { useEffect, useState } from 'react'
import GeneralModal from '../modals/GeneralModal'
import Reviewinfo from './review/Reviewinfo'
// import { db } from '@/app/firebaseConfig';
// import { collection, count, getDocs } from 'firebase/firestore';
import Review from './review/Review';
import Image from 'next/image'
import { useReviews } from '@/context/Review';
const Dashboard = () => {
    const [openfeedback, setOpenfeedback] = useState(false)
    
    // Fetch review from the useContext
    const review = useReviews();

    //function to open modal
    const handleOpenModal = () => {
        setOpenfeedback(true)
    }
    
    const handleClose = () => {
        setOpenfeedback(false)
    }

    return (
        <>
            {
                review.length === 0 ? (
                    <div className='flex flex-col w-full h-[90vh] items-center justify-center'>
                        <div className='flex flex-col items-center gap-3 lg:px-[5%]'>
                            {/* <Image src="/images/review.svg" alt="" /> */}
                            <Image width={450} height={450} src={"/images/review.svg"} />
                            <p>Oops! No review yet</p>
                            <div>
                                <button onClick={handleOpenModal} className='flex uppercase bg-[var(--blue)] px-6 py-3 rounded-md text-white'>Leave a review</button>
                            </div>
                        </div>

                        {
                            openfeedback && (
                                <GeneralModal
                                    close={handleClose}
                                />
                            )
                        }
                    </div>
                ) :
                (
                    <Review/>
                )
            }




        </>
    )
}

export default Dashboard