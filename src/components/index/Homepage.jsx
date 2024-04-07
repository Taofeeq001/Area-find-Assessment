'use client'
import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
const Homepage = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true
        });
    }, []);
    return (
        <div className='flex lg:flex-row w-full gap-3 items-center justify-between px-[5%] h-screen bg-[var(--secondary-color)] overflow-hidden'>
            <div data-aos="fade-up" className='flex flex-col text-[var(--text-color)] lg:w-1/2 w-full gap-4'>
                <div className='lg:w-[80%] flex flex-col gap-4'>
                    <p className='font-bold lg:text-6xl text-3xl lg:text-start text-center w-full'>Find a place you will love to live!</p>
                    <p className='flex lg:text-2xl lg:text-start text-center'>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
                </div>
                <form className='flex flex-col gap-3 lg:items-start items-center' action="">
                    <div className='border border-[#D4DCF1] w-full bg-[#F3F7FE] rounded-lg flex flex-row items-center pl-2'>
                        <IoSearchOutline className='text-2xl text-black' />
                        <input type="text" placeholder='Enter Address' className='p-3 font-semibold outline-none border-none bg-transparent text-black' />
                    </div>
                    <div>
                        <button className='cursor-pointer py-3 px-8 bg-[var(--blue)] rounded-md border-2 border-[var(--blue)] text-white font-semibold hover:bg-white hover:text-[var(--blue)]'>Search</button>
                    </div>
                </form>
            </div>
            <div data-aos="flip-right" className='flex overflow-hidden'>
                <img className='lg:block hidden' src={"/images/home1.png"} alt='' />
            </div>
        </div>
    )
}

export default Homepage