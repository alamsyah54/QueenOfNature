import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { BiMenuAltRight, BiCategoryAlt } from "react-icons/bi"
import { MdShoppingCartCheckout } from "react-icons/md"
import { BsBoxSeam, BsTelephone } from "react-icons/bs"
import MainLogo from "../assets/images/MainLogo.webp"
import MainLogoLight from "../assets/images/MainLogoLight.webp"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className='w-full fixed top-0 left-0 z-50'>
            <div>
                {/* NAVBAR BUTTON START */}
                <ul className='flex py-6 backdrop-blur justify-between rounded-b-3xl drop-shadow-2xl border-white/10 border-b-4'>
                    <li className='px-10 py-5 w-[500px] flex justify-start items-center dark:text-transparent bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text'>
                        <ul className='invisible md:visible lg:visible flex items-center gap-6 font-sans font-semibold cursor-pointer text-base lg:text-2xl'>
                            <li className='flex text-center gap-2 text-xl items-center text-sky-600 dark:text-transparent dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800'>
                                <BiCategoryAlt className='dark:text-blue-400' />
                                <Link to='/productlist'>Category</Link>
                            </li>
                            <li className='flex text-center gap-2 text-xl items-center text-sky-600 dark:text-transparent dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800'>
                                <BsBoxSeam className='dark:text-blue-400' />
                                <Link to='/productlist'>Product</Link>
                            </li>
                            <li className='flex text-center gap-2 text-xl items-center text-sky-600 dark:text-transparent dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800'>
                                <BsTelephone className='dark:text-blue-400' />
                                <Link to='/productlist'>Contact</Link>
                            </li>
                        </ul>
                    </li>

                    {/* NAVBAR BRAND LOGO START */}
                    <li className='p-2 max-w-60 flex items-center'>
                        <Link to='/'>
                            <img
                                className='duration-300 w-24 dark:opacity-0 lg:w-32 md:w-28 lg:flex lg:justify-center lg:items-center fixed top-7 left-7 lg:top-6 md:top-6 lg:left-[48%] md:left-[48%]'
                                src={MainLogo}
                                alt='Queen Of Nature'
                            ></img>
                            <img
                                className='duration-300 opacity-0 dark:opacity-100  w-24 lg:w-32 md:w-28 lg:flex lg:justify-center lg:items-center fixed top-7 left-7 lg:top-6 md:top-6 lg:left-[48%] md:left-[48%]'
                                src={MainLogoLight}
                                alt='Queen Of Nature'
                            ></img>
                        </Link>
                    </li>
                    {/* NAVBAR BRAND LOGO END */}

                    <li className='px-10 w-[500px] flex justify-end text-end items-center py-4 absolute right-0'>
                        {/* <div className='invisible lg:visible md:visible rounded-full drop-shadow cursor-pointer dark:border-gray-200 hover:drop-shadow-lg px-3 hover:scale-105 hover:-mt-2 duration-300 hover:text-white hover:bg-sky-600 border-sky-600 border-2 py-1 text-sky-600 font-semibold'>
                            <Link to='/order-with'>Order Now</Link>
                        </div> */}
                        <Link to='/order-with'>
                            <div class='relative invisible md:visible lg:visible inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                                <span class='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-900 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                                    <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                                </span>
                                <span class='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                                    Checkout Now!
                                </span>
                                <span class='relative invisible font-bold'>
                                    <Link to='/order-with'>Checkout Now!</Link>
                                </span>
                            </div>
                        </Link>

                        <div
                            onClick={() => setNav(!nav)}
                            className='cursor-pointer flex justify-end items-center md:hidden lg:hidden'
                        >
                            <BiMenuAltRight
                                size={35}
                                className='text-sky-600 hover:scale-105 hover:-mt-2 duration-300 drop-shadow-sm dark:text-sky-300 flex justify-end'
                            />
                        </div>
                    </li>
                    {/* NAVBAR BUTTON END */}
                </ul>

                {/* OVERLAY MENU START*/}
                {/* OVERLAY BACKGROUND BLUR START*/}
                {nav ? (
                    <div
                        onClick={() => setNav(!nav)}
                        className='backdrop-blur-sm fixed w-full h-full z-50 top-0 left-0'
                    ></div>
                ) : (
                    ""
                )}
                <div
                    className={
                        nav
                            ? "fixed bottom-0 justify-center left-0 right-0  w-full h-[35%] items-center drop-shadow-2xl dark:bg-slate-800 bg-gray-200 z-50 rounded-t-3xl "
                            : "fixed bottom-[-100%] left-0 w-[300px] h-screen dark:bg-slate-800 bg-gray-200 z-50 duration-1000"
                    }
                >
                    {/* OVERLAY BACKGROUND BLUR END*/}
                    <div className='flex justify-center rounded-3xl drop-shadow-2xl dark:border-slate-800 border-b-4 px-3 dark:bg-slate-800 bg-gray-200 z-50'>
                        <div className='mx-auto flex items-center'>
                            <img
                                className='w-24 lg:w-32 h-auto flex justify-center items-center my-5 dark:drop-shadow-lg'
                                src={MainLogo}
                                alt='Queen Of Nature'
                            ></img>
                        </div>
                        <AiFillCloseCircle
                            onClick={() => setNav(!nav)}
                            size={30}
                            className='fixed justify-end dark:text-gray-400 items-end right-[2%] md:right-[2%] lg:right-[2%] my-3 cursor-pointer dark:hover:text-red-500 text-red-500 grayscale hover:grayscale-0 hover:scale-150 duration-300'
                        />
                    </div>
                    <nav>
                        <div className='bg-gray-100 dark:bg-slate-800 py-5 lg:pt-10 z-50'>
                            <ul className='flex flex-row gap-10 pt-5 pb-10 text-gray-800 justify-evenly font-semibold'>
                                <li className='flex text-center gap-2 text-xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-sky-500 drop-shadow-sm'>
                                    <BiCategoryAlt className='dark:text-blue-400' />
                                    <Link to='/productlist'>Category</Link>
                                </li>
                                <li className='flex text-center gap-2 text-xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-sky-500 drop-shadow-sm'>
                                    <BsBoxSeam className='dark:text-blue-400' />
                                    <Link to='/productlist'>Product</Link>
                                </li>
                                <li className='flex text-center gap-2 text-xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-sky-500 drop-shadow-sm'>
                                    <BsTelephone className='dark:text-blue-400' />
                                    <Link to='/productlist'>Contact</Link>
                                </li>
                            </ul>
                            <div className='flex justify-center items-center pt-4'>
                                <Link to='/order-with'>
                                    <div class='relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                                        <span class='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-700 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                                            <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                                        </span>
                                        <span class='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 via-sky-600 to-emerald-600 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                                            Checkout Now!
                                        </span>
                                        <span class='relative invisible font-bold'>
                                            <Link to='/order-with'>
                                                Checkout Now!
                                            </Link>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* OVERLAY MENU END*/}
            </div>
        </div>
    )
}

export default Navbar
