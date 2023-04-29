import React from "react"
import QueenCrown from "../assets/images/QueenCrown.webp"
import { Link } from "react-router-dom"
import { BsFacebook, BsLine } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className='relative bottom-0 left-0'>
            <footer class='bg-white dark:bg-slate-700 border-t-2 border-slate-300 dark:border-slate-500'>
                <div class='mx-auto w-full container p-6 sm:p-6'>
                    <div class='md:flex md:justify-between mt-9'>
                        {/* BRAND DESCRIPTION START*/}
                        <div class='flex flex-col mb-7'>
                            <Link to='/' class='flex items-start mb-5'>
                                <img
                                    className='bg-local w-24 lg:w-32 duration-300'
                                    src={QueenCrown}
                                    alt='Queen Of Nature'
                                />
                                <div className='mx-7 items-center'>
                                    <div className='relative mb-14'>
                                        <span class='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-md'>
                                            Queen Of Nature
                                        </span>
                                        <span class='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                            Queen Of Nature
                                        </span>
                                    </div>
                                    <p className='text-gray-700 dark:text-gray-300'>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                        <br /> Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s,
                                    </p>
                                </div>
                            </Link>
                        </div>
                        {/* BRAND DESCRIPTION END*/}

                        {/* FOOTER TEXT START */}
                        <div class='grid grid-cols-2 gap-10 sm:gap-7 sm:grid-cols-3'>
                            <div className='text'>
                                <h2 class='mb-6 text-sm font-bold text-slate-500 uppercase dark:text-white'>
                                    Product
                                </h2>
                                <ul class='text-gray-600 dark:text-gray-400'>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Shampoo
                                        </Link>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Oil Face Wash
                                        </Link>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Lotion
                                        </Link>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Solid & Liquid Soup
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text'>
                                <h2 class='mb-6 text-sm font-bold text-slate-500 uppercase dark:text-white'>
                                    About Us
                                </h2>
                                <ul class='text-gray-600 dark:text-gray-400'>
                                    <li class='mb-4'>
                                        <a
                                            href='https://goo.gl/maps/ia6fSjwQTuhFUYzs8'
                                            class='hover:underline'
                                            target='blank'
                                        >
                                            52 Soi Inthayongyot 2, <br />
                                            Amphoe Mueang, <br />
                                            Lamphun 51000
                                        </a>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Contact Person
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text'>
                                <h2 class='mb-6 text-sm font-bold text-slate-500 uppercase dark:text-white'>
                                    Legal
                                </h2>
                                <ul class='text-gray-600 dark:text-gray-400'>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Terms Of Service
                                        </Link>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li class='mb-4'>
                                        <Link
                                            to='/productlist'
                                            class='hover:underline'
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER TEXT END */}

                    {/* FOOTER COPYRIGHT & SOCIAL MEDIA ICON */}
                    <hr class='my-6 border-slate-300 sm:mx-auto dark:border-slate-500 lg:my-8 h-2' />
                    <div class='sm:flex sm:items-center sm:justify-between'>
                        <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                            © 2023
                            <Link to='/' class='hover:underline ml-1'>
                                Queen Of Nature
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div class='flex mt-4 space-x-6 sm:justify-center text-2xl sm:mt-0'>
                            <a
                                href='#'
                                target='blank'
                                class='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <BsFacebook />
                                <span class='sr-only'>Facebook page</span>
                            </a>
                            <a
                                href='#'
                                target='blank'
                                class='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <RiInstagramFill />
                                <span class='sr-only'>Facebook page</span>
                            </a>
                            <a
                                href='#'
                                target='blank'
                                class='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <BsLine />
                                <span class='sr-only'>Facebook page</span>
                            </a>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT & SOCIAL MEDIA ICON */}
                </div>
            </footer>
        </div>
    )
}

export default Footer
