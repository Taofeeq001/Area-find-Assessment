'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Rate from './Rating';
import { data } from '../data';
import { db } from '@/app/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import ReactStars from "react-rating-stars-component";
const Content = ({ close }) => {
    const [open, setOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const [details, setDetails] = useState("")
    const [loading, setLoading] = useState(false)
    const [clicked, setClicked] = useState(false)

    const router = useRouter()

    //function to get random numbers to be used for month
    const month = Math.floor(Math.random() * 12);
    const handleDrop = () => {
        setOpen(!open)
    }

    const ratingChanged = (newRating) => {
        setRating(newRating)
    };

    const handleInput = ()=>{
        setClicked(true)
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
        setLoading(true)
        e.preventDefault();
        if(!clicked){
            return;
        }
        const add = await addDatatofirebase(rating, details, month)
        if (add) {
            setRating(0);
            setDetails("")
            toast.success("Review Added Successfully")
            setLoading(false)
            window.location.href="/dashboard"
        }

    }

    //function to close dropdown for select amenities
    const closedropdown = (e) =>{
        if(!e.target.closest(".drop")){
            setOpen(false)
        }
    }
    useEffect(()=>{
        document.body.addEventListener("click", closedropdown)
        return ()=>{
            document.body.removeEventListener("click", closedropdown)
        }
    })

    return (
        <form>
            <div onClick={handleDrop} className='flex flex-row w-full justify-between cursor-pointer items-center bg-[#F3F7FE] p-2 rounded-md relative'>
                <p>Select amenities</p>
                <IoIosArrowDown />
            </div>
            {
                open && (
                    <div className='bg-gray-300 drop absolute rounded-md lg:w-[92%] md:w-[95%] w-[86%] right-6 p-2 lg:gap-2 gap-4 grid lg:grid-cols-5 grid-cols-3 z-50'>
                        {
                            data.map((dat, index) => (
                                <div key={index}>
                                    <span key={index} className='flex items-center gap-4'>
                                        <input key={index} type="checkbox" onClick={handleInput} name="" id="" />
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
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
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
                <button onClick={handleSubmit} disabled={!clicked} className={`p-3 bg-[var(--blue)] cursor-pointer w-1/2 flex items-center justify-center rounded-md ${!clicked && 'opacity-50'}`}>
                    {
                        loading ? "Submitting..." : "Submit"
                    }
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