import React from 'react'
import Link from 'next/link'
import { TbMoon } from 'react-icons/tb'

const Navigation = ({ handleclick }) => {
    return (
        <div className='flex flex-row px-[5%] py-5 w-full justify-between sticky top-0 bg-[var(--secondary-color)]'>
            <Link href={"/"} className='flex flex-row gap-1 items-center'>
                <p className='font-bold text-[var(--text-color)]'>S P O T T A</p>
                <span >
                    <p className='bg-[#5378F6] rounded-md w-fit p-1 text-white font-bold text-xs'>NG</p>
                </span>
            </Link>
            <div className='flex flex-row items-center space-x-5'>
                <span onClick={handleclick}>
                    <TbMoon className='text-[var(--text-color)]' />
                </span>
                <Link href={"/login"} className='text-[#557FF2] font-bold'>Login</Link>
            </div>
        </div>
    )
}

export default Navigation