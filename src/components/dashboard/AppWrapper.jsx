'use client'
import React, { useState } from 'react'
import Nav from '../nav/dashnav/Nav'
import GeneralModal from '../modals/GeneralModal'

const AppWrapper = ({ children }) => {
    const [mode, setMode] = useState(false)
    const [openfeedback, setOpenfeedback] = useState(false)

    const handleOpenModal = () => {
        setOpenfeedback(true)
    }

    //set the modes with the handleclick function
    const handleClick = () => {
        setMode(!mode)
    }
    return (
        <div className={`${mode ? "dark-mode" : "light-mode"} bg-[var(--secondary-color)] flex flex-col`}>
            <Nav
                handleclick={handleClick}
                handleOpenModal={handleOpenModal}

            />
            {children}

            {
                openfeedback && (
                    <GeneralModal/>
                )
            }
        </div>
    )
}

export default AppWrapper