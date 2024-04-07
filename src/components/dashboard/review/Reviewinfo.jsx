'use client'
import React, { useEffect, useState } from 'react'
import { review } from '../data'
import { db } from '@/app/firebaseConfig';
import { collection, count, getDocs } from 'firebase/firestore';

const Reviewinfo = ({onReviewAvailable}) => {
    const [reviews, setReviews] = useState([]);
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [comment, setComment] = useState(0)
    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsCollection = collection(db, 'Reviews');
            const snapshot = await getDocs(reviewsCollection);
            const reviewData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(reviewData);
        };

        fetchReviews();
    }, []);

    // console.log(reviews)
   
    return (
        // <div></div>
        <div className='flex flex-col gap-4'>
            {
                reviews.map((rev, index) => (
                    <div key={index}>
                        <div className='border-b py-4' >
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-1 items-center'>
                                    <img src="/images/pics.png" alt="" />
                                    <span className='flex flex-row items-center'>
                                        <b>User Y.</b>
                                        <p>{rev.months} months ago</p>
                                    </span>
                                </div>
                                <div className='flex flex-row items-center gap-1'>
                                    <img src="/images/Rating.png" alt="" />
                                    <p>{rev.rating}</p>
                                </div>

                            </div>
                            <div>
                                <p>{rev.details}</p>
                                <div className='flex flex-row gap-3'>
                                    <span className='flex flex-row items-center'>
                                        <img src="/images/like.png" alt="" />
                                        <p>{count1}</p>
                                    </span>
                                    <span className='flex flex-row items-center'>
                                        <img src="/images/dislike.png" alt="" />
                                        <p>{count2}</p>
                                    </span>
                                    <span className='flex flex-row items-center'>
                                        <img src="/images/comment.png" alt="" />
                                        <p>{comment}</p>
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