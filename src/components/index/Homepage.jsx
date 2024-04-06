import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";

const Homepage = () => {
    return (
        <div className='flex lg:flex-row w-full gap-3 items-center justify-between px-[5%] '>
            <div className='flex flex-col text-[var(--text-color)] w-1/2 gap-4'>
                <div className='lg:w-[80%] flex flex-col gap-4'>
                    <p className='font-bold text-6xl w-full'>Find a place you will love to live!</p>
                    <p className='flex text-2xl'>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
                </div>
                <div className='border border-[#D4DCF1] bg-[#F3F7FE] rounded-lg flex flex-row items-center pl-2'>
                    <IoSearchOutline className='text-2xl text-black' />
                    <input type="text" placeholder='Enter Address' className='p-3 font-semibold outline-none border-none bg-transparent' />
                </div>
                <div>
                    <button className='cursor-pointer py-3 px-8 bg-[var(--blue)] text-white font-semibold'>Search</button>
                </div>
            </div>
            <img src={"/images/home1.png"} alt='' />
        </div>
    )
}

export default Homepage