import React from 'react'
import Link from 'next/link'

const Navigation = ({handleclick}) => {
  return (
    <div  className='flex flex-row px-[5%] py-5 w-full justify-between'>
        <Link href={"/"} className='flex flex-row gap-1 items-center'>
            <p className='font-bold text-[var(--text-color)]'>S P O T T A</p>
            <span >
                <p className='bg-[#5378F6] rounded-md w-fit p-1 text-white font-bold text-xs'>NG</p>
            </span>
        </Link>
        <div>
            <span onClick={handleclick}>
                icon
            </span>
            <Link href={"/login"} className='text-[#557FF2] font-bold'>Login</Link>
        </div>
    </div>
  )
}

export default Navigation