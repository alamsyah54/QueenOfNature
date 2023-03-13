import React, { useState } from "react"
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from "react-icons/ai"
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUserFriends, FaWallet } from "react-icons/fa"
import { MdFavorite, MdHelp } from "react-icons/md"
import MainLogo from "../assets/images/MainLogo.webp"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-full mx-auto flex justify-center items-center py-5 px-10'>
            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 mx-2 w-28 sm:w-32 lg:w-52'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search'
                />
            </div>
            {/* Logo */}
            <div className='flex items-center'>
                <img
                    className='w-20 flex items-center items-center'
                    src={MainLogo}
                    alt='Queen Of Nature'
                ></img>
            </div>
            {/* Menu button */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? (
                <div
                    onClick={() => setNav(!nav)}
                    className='bg-black/50 blur-sm grayscale fixed w-full h-screen z-10 top-0 left-0'
                ></div>
            ) : (
                ""
            )}

            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' />{" "}
                            Orders
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdFavorite size={25} className='mr-4' /> Favorites
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaWallet size={25} className='mr-4' /> Wallet
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25} className='mr-4' /> Help
                        </li>
                        <li className='text-xl py-4 flex'>
                            <AiFillTag size={25} className='mr-4' /> Promotions
                        </li>
                        <li className='text-xl py-4 flex'>
                            <BsFillSaveFill size={25} className='mr-4' /> Best
                            Ones
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaUserFriends size={25} className='mr-4' /> Invite
                            Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
