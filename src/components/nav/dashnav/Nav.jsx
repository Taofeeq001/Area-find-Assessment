import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import { data } from '@/components/dashboard/data'
// import { TbArrowRight } from 'react-icons/tb'
import { IoIosArrowForward } from "react-icons/io";
import { TbMoon } from 'react-icons/tb'

const Nav = ({ handleclick }) => {

    return (
        <div className='flex flex-col px-[5%] py-5 gap-3 w-full bg-[var(--dash-color)] overflow-hidden sticky top-0'>
            <div className='flex flex-row w-full justify-between'>
                <div className='flex lg:flex-row gap-2 items-center'>
                    <div className='flex lg:flex-row gap-1 items-center w-[150px]'>
                        <p className='font-bold lg:text-[14px] text-xs text-[var(--text-color)]'>S P O T T A</p>
                        <span >
                            <p className='bg-[#5378F6] rounded-md w-fit p-1 text-white font-bold text-xs'>NG</p>
                        </span>
                    </div>
                    <div className='border border-[#D4DCF1] bg-white rounded-lg flex flex-row items-center pl-2 lg:w-full w-[30%]'>
                        <IoSearchOutline className='text-2xl text-blue-400' />
                        <input type="search" placeholder='Bonny and Clyde Street, Ajao Estate, Lagos' className='px-2 py-1 lg:w-[600px] w-full font-semibold outline-none border-none bg-transparent' />
                    </div>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <span onClick={handleclick}>
                        <TbMoon/>
                    </span>
                    <p className='font-bold sm:text-xs md:text-xs'>Welcome!</p>
                    <Image width={40} height={40} src={"/images/avatar.svg"} />
                    {/* <Link href={"/login"} className='text-[#557FF2] font-bold'>Login</Link> */}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex lg:flex-row w-full justify-between'>
                    <div>
                        <p className='font-bold text-[var(--text-color)]'>Bonny and Clyde Street, Ajao Estate, Lagos</p>
                        <p className='text-[var(--text-color)]'>"0" Reviews</p>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-3'>
                            <div>
                                <button
                                    // onClick={handleOpenModal} 
                                    className='flex uppercase bg-[var(--blue)] px-3 py-3 rounded-md text-white'>
                                    Leave a review
                                </button>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <img src="/images/Button.png" alt="" />
                                <img src="/images/share (2).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between lg:full overflow-x-auto text-[var(--text-color)]'>
                    {
                        data.map((list, index) => {
                            return (
                                <div key={index}>
                                    <p className='p-1 border-[1px] lg:text-[16px] text-xs rounded-md'>{list.text}</p>
                                </div>
                            )
                        })
                    }
                    <IoIosArrowForward />
                </div>

            </div>
        </div>
    )
}

export default Nav;