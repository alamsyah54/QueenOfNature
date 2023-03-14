import React, { useState } from "react"
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillCloseCircle,
    AiFillTag,
} from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"
import MainLogo from "../assets/images/MainLogo.webp"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full fixed top-0 left-0'>
            <ul className='flex py-6 bg-white/50 justify-between rounded-b-3xl drop-shadow-2xl'>
                <li className='px-10 py-5 w-[500px] flex justify-start items-center'>
                    <ul className='invisible md:visible lg:visible flex items-center gap-5 font-sans font-semibold cursor-pointer text-base lg:text-2xl'>
                        <li className='flex text-center  text-blue-600 hover:scale-105  hover:text-slate-600'>
                            <Link to='/categorylist'>Category</Link>
                        </li>
                        <li className='flex text-center  text-blue-600 hover:scale-105  hover:text-slate-600'>
                            <Link to='/productlist'>Product</Link>
                        </li>
                        <li className='flex text-center  text-blue-600 hover:scale-105  hover:text-slate-600'>
                            <Link to='/ourcontact'>Contact</Link>
                        </li>
                    </ul>
                </li>

                {/* Logo */}
                <li className='p-2 max-w-60 flex items-center'>
                    <img
                        className='hover:scale-110 w-24 lg:w-32 md:w-28 lg:flex lg:justify-center lg:items-center fixed top-7 left-7 lg:top-6 md:top-6 lg:left-[48%] md:left-[48%]'
                        src={MainLogo}
                        alt='Queen Of Nature'
                    ></img>
                </li>

                <li className='px-10 w-[500px] flex justify-end text-end items-center'>
                    {/* Menu button */}
                    <div className='invisible lg:visible md:visible rounded-full bg-gray-100 hover:drop-shadow-lg px-3 hover:text-white hover:bg-blue-600 border-blue-600 border-2 py-1 text-blue-600 font-semibold'>
                        <Link to='/order-with'>Order Now</Link>
                    </div>
                    <div
                        onClick={() => setNav(!nav)}
                        className='cursor-pointer flex justify-end items-center md:hidden lg:hidden'
                    >
                        <BiMenuAltRight
                            size={35}
                            className='text-blue-600 flex justify-end'
                        />
                    </div>
                </li>
            </ul>

            {/* Overlay */}
            {nav ? (
                <div
                    onClick={() => setNav(!nav)}
                    className='backdrop-blur-sm grayscale fixed w-full h-screen z-10 top-0 left-0'
                ></div>
            ) : (
                ""
            )}
            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed bottom-0 justify-center left-0 right-0  w-full h-[40%] drop-shadow-2xl bg-white z-10 duration-1000 rounded-t-3xl "
                        : "fixed bottom-[-100%] left-0 w-[300px] h-screen bg-white z-10 duration-1000"
                }
            >
                <div className='flex justify-center rounded-b-3xl drop-shadow-2xl border-b-4 px-3'>
                    <div className=' flex mx-auto'>
                        <img
                            className='w-24 lg:ml-[90%] md:ml-[47%] lg:w-32 h-auto flex justify-center items-center my-5'
                            src={MainLogo}
                            alt='Queen Of Nature'
                        ></img>
                    </div>
                    <AiFillCloseCircle
                        onClick={() => setNav(!nav)}
                        size={20}
                        className='fixed justify-end items-end right-[1%] md:right-[1%] lg:right-[1%] my-3 cursor-pointer text-gray-400'
                    />
                </div>

                <nav>
                    <ul className='flex flex-row gap-10 p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' />{" "}
                            Orders
                        </li>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' />{" "}
                            Orders
                        </li>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' />{" "}
                            Orders
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
