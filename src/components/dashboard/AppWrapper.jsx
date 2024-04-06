'use client'
import React, { useState } from 'react'
import Nav from '../nav/dashnav/Nav'

const AppWrapper = ({ children }) => {
    const [mode, setMode] = useState(false)



    //set the modes with the handleclick function
    const handleClick = () => {
        setMode(!mode)
    }
    return (
        <div className='flex flex-col'>
            <Nav
                handleclick={handleClick}

            />
            {children}
        </div>
    )
}

export default AppWrapper