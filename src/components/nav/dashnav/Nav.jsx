import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import { data } from '@/components/dashboard/data'
import { TbArrowRight } from 'react-icons/tb'

const Nav = ({ handleclick }) => {

    return (
        <div className='flex flex-col px-[5%] py-5 gap-3 w-full'>
            <div className='flex flex-row w-full justify-between'>
                <div className='flex lg:flex-row gap-2 items-center'>
                    <p className='flex lg:flex-row gap-1 items-center'>
                        <p className='font-bold text-[14px] text-[var(--text-color)]'>S P O T T A</p>
                        <span >
                            <p className='bg-[#5378F6] rounded-md w-fit p-1 text-white font-bold text-xs'>NG</p>
                        </span>
                    </p>
                    <div className='border border-[#D4DCF1] bg-white rounded-lg flex flex-row items-center pl-2'>
                        <IoSearchOutline className='text-2xl text-blue-400' />
                        <input type="search" placeholder='Bonny and Clyde Street, Ajao Estate, Lagos' className='p-2 lg:w-[600px] w-[40%] font-semibold outline-none border-none bg-transparent' />
                    </div>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <span onClick={handleclick}>
                        icon
                    </span>
                    <p className='font-bold'>Welcome!</p>
                    <Image width={40} height={40} src={"/images/avatar.svg"} />
                    {/* <Link href={"/login"} className='text-[#557FF2] font-bold'>Login</Link> */}
                </div>
            </div>
            <div>
                <div>
                    <p className='font-bold'>Bonny and Clyde Street, Ajao Estate, Lagos</p>
                    <p>"0" Reviews</p>
                </div>
                <div className='flex items-center gap-1'>
                    {
                        data.map((list, index)=>{
                            return(
                                <div key={index}>
                                    <p className='p-1 border-[1px] rounded-md'>{list.text}</p>
                                </div>
                            )
                        })
                    }
                    <TbArrowRight/>
                </div>

            </div>
        </div>
    )
}

export default Nav;