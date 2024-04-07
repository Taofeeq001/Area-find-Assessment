'use client'
import React, { useEffect, useState } from 'react'
import GeneralModal from '../modals/GeneralModal'
import Review from './review/Review';
import Image from 'next/image'
import { useReviews } from '@/context/Review';
import AOS from "aos";
import "aos/dist/aos.css";
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
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true
        });
    }, []);

    return (
        <>
            {
                review.length === 0 ? (
                    <div className='flex flex-col w-full h-[90vh] items-center justify-center'>
                        <div data-aos="fade-up" className='flex flex-col items-center gap-3 lg:px-[5%]'>
                            {/* <Image src="/images/review.svg" alt="" /> */}
                            <Image width={300} height={300} src={"/images/review.svg"} />
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