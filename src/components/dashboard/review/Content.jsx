'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Rate from './Rating';
import { data } from '../data';
import { db } from '@/app/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
const Content = ({ close }) => {
    const [open, setOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const [details, setDetails] = useState("")
    // const [date, setDate] = useState("")
    // const router = useRouter()


    const month = Math.floor(Math.random() * 12);
    const handleDrop = () => {
        setOpen(!open)
    }

    const handleRating = (rate) => {
        setRating(rate)
    }

    async function addDatatofirebase(rating, details, months) {
        try {
            const docRef = await addDoc(collection(db, "Reviews"), {
                rating: rating,
                details: details,
                months: month
            });
            console.log("Document written with ID: ", docRef.id);
            return true
        } catch (error) {
            console.error("Error adding document: ", error);
            return false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const add = await addDatatofirebase(rating, details)
        if (add) {
            setRating(0);
            setDetails("")
            toast.success("Review Added Successfully")
            // router.refresh()
        }

    }

    return (
        <form>
            <div onClick={handleDrop} className='flex flex-row w-full justify-between cursor-pointer items-center bg-[#F3F7FE] p-2 rounded-md relative'>
                <p>Select amenities</p>
                <IoIosArrowDown />
            </div>
            {
                open && (
                    <div className='bg-gray-300 absolute rounded-md w-[92%] right-6 p-2 lg:gap-2 gap-4 grid lg:grid-cols-5 grid-cols-3 z-50'>
                        {
                            data.map((dat, index) => (
                                <div>
                                    <span className='flex items-center gap-4'>
                                        <input key={index} type="checkbox" name="" id="" />
                                        <p className='text-xs'>{dat.text}</p>
                                    </span>
                                </div>
                            ))
                        }

                    </div>
                )
            }
            <div>
                <p>Rate location</p>
                <Rate
                    rating={rating}
                    handleRating={handleRating}
                />
                {/* <Rating style={{display:'flex',flexDirection:"row"}} onClick={handleRating} ratingValue={rating} size={20} /> */}
            </div>
            <div>
                <p>Write Review</p>
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className='border-grey-200 p-3 border w-full rounded-md'
                    name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className='flex flex-row gap-1 items-center'>
                <input type="checkbox" name="" id="" />
                <p>Post as Anonymous</p>
            </div>


            <div className='flex justify-between gap-3'>
                <button onClick={handleSubmit} className='p-3 bg-[var(--blue)] cursor-pointer w-1/2 flex items-center justify-center rounded-md'>
                    Submit
                </button>
                <button onClick={close} className='p-3 border-[1px] border-[var(--blue)] cursor-pointer text-[var(--blue)] w-1/2 flex items-center justify-center rounded-md'>
                    Cancel
                </button>

            </div>
            <ToastContainer />
        </form>
    )
}

export default Content