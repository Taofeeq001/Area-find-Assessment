'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Rating } from 'react-simple-star-rating'
const Content = ({close}) => {
    const [open, setOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const handleDrop = () => {
        setOpen(true)
    }

    const handleRating = (rate) => {
        setRating(rate)
    }
    console.log(rating)
    return (
        <div>
            <div onClick={handleDrop} className='flex flex-row w-full justify-between cursor-pointer items-center bg-[#F3F7FE] p-2 rounded-md relative'>
                <p>Select amenities</p>
                <IoIosArrowDown />
            </div>
            {
                open && (
                    <div>

                    </div>
                )
            }
            <div>
                <p>Rate location</p>
                    <Rating style={{display:'flex',flexDirection:"row"}} onClick={handleRating} ratingValue={rating} size={20} />
            </div>
            <div>
                <p>Write Review</p>
                <textarea className='border-grey-200 p-3 border w-full rounded-md' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className='flex flex-row gap-1 items-center'>
                <input type="checkbox" name="" id="" />
                <p>Post as Anonymous</p>
            </div>


            <div className='flex justify-between gap-3'>
                <div className='p-3 bg-[var(--blue)] cursor-pointer w-1/2 flex items-center justify-center rounded-md'>
                    <button>Submit</button>
                </div>
                <div onClick={close} className='p-3 border-[1px] border-[var(--blue)] cursor-pointer text-[var(--blue)] w-1/2 flex items-center justify-center rounded-md'>
                    <button>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Content