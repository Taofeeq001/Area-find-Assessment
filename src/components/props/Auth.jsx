import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Auth = ({ link, img, name }) => {
    return (
        <button>
            <Link href={link} className='flex gap-2 w-full items-center p-2 border border-[var(--border)] rounded-md justify-center'>
                <Image height={25} alt='' width={25} src={img} />
                <p className=''>{name}</p>
            </Link>
        </button>

    )
}

export default Auth