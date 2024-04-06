'use client'
import React, { useState } from 'react'
import Navigation from './nav/Navigation'
import { usePathname } from 'next/navigation'

const Appwrapper = ({ children }) => {
  const [mode, setMode] = useState(false)
  const pathname = usePathname();



  //set the modes with the handleclick function
  const handleClick = () => {
    setMode(!mode)
  }
  return (
    <div className={`${mode ? "dark-mode" : "light-mode"} bg-[var(--secondary-color)]`}>
      {
        pathname === "/dashboard" ? (
          ""
        ) : <Navigation
          handleclick={handleClick}
        />
      }

      <main>
        {children}
      </main>
    </div>
  )
}

export default Appwrapper