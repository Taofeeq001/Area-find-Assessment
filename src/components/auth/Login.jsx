'use client'
import React, { useState } from 'react'
import { TbEyeClosed, TbEye } from 'react-icons/tb'
import Auth from '../props/Auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const [error1, setError1] = useState("")

    const router  = useRouter()



    const password = () => {
        setOpen(!open)
    }

    //submit credentials to login
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError(true)
        } else if (!pass) {
            setError(false)
            setError1(true)
        }else{
            router.push("/dashboard")
        }
    }
    return (
        <div className='flex flex-col w-full h-[90vh] items-center justify-center'>
            <div className='lg:w-[25%] w-[90%] rounded-lg px-5 py-10 bg-[var(--primary-color)]'>
                <form className='flex flex-col gap-6 w-full' action="">
                    <span className='w-full items-center justify-center flex'>
                        <p className='text-2xl text-[var(--text-color)]'>Log in</p>
                    </span>
                    <div className='flex flex-col gap-3'>
                        <span>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md border border-[#D4DCF1] bg-[#F3F7FE] w-full' placeholder='E-mail' type="email" name="" id="" />
                            {
                                error && (
                                    <p className='text-xs text-red-500'>Email address is missing</p>
                                )
                            }
                        </span>
                        <span>
                            <div className='border-2 flex items-center rounded-md'>

                                <input value={pass} onChange={(e) => setPass(e.target.value)} className='p-2 outline-none w-full'
                                    type={open ? "text" : "password"}
                                    name="" id="" />
                                {/*  */}
                                <span onClick={password} className='text-2xl cursor-pointer'>
                                    {
                                        open ? <TbEyeClosed /> : <TbEye />
                                    }
                                </span>

                            </div>
                            {
                                error1 && (
                                    <p className='text-xs text-red-500'>password must be provided</p>

                                )
                            }

                        </span>
                    </div>
                    <button onClick={handleSubmit} className='bg-[var(--blue)] p-3 rounded-md'>Login</button>
                </form>
                <div className='flex mt-4 flex-row items-center'>
                    <p className='w-full h-[1px] bg-black'></p>
                    <p className='px-2'>Or</p>
                    <p className='w-full h-[1px] bg-black'></p>
                </div>
                <div className='flex flex-col gap-3'>
                    <Auth
                        link={"https://www.gmail.com"}
                        img={"/images/gmail.png"}
                        name={"Log in with Google"}
                    />
                    <Auth
                        link={"https://www.facebook.com"}
                        img={"/images/facebook (2).png"}
                        name={"Log in with Facebook"}
                    />
                    <Auth
                        link={"https://www.apple.com"}
                        img={"/images/apple.png"}
                        name={"Log in with Apple"}
                    />
                </div>
                <div className='flex flex-col gap-2 items-center mt-3'>
                    <u>Forgot your password?</u>
                    <p>Dont have an Account? <span><Link href={""}> <u className='text-[var(--blue)]'>Sign Up</u> </Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login