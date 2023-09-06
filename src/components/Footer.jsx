import React from "react"
import QueenCrown from "/assets/images/QueenCrown.webp"
import { Link } from "react-router-dom"
import { BsFacebook, BsLine } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className='relative bottom-0 left-0'>
            <footer className='bg-white dark:bg-slate-700 border-t-2 border-slate-300 dark:border-slate-500'>
                <div className='mx-auto w-full container p-6 sm:p-6'>
                    <div className='md:flex md:justify-between mt-9'>
                        {/* BRAND DESCRIPTION START*/}
                        <div className='flex flex-col mb-7'>
                            <Link to='/' className='flex items-start mb-5'>
                                <img
                                    className='bg-local w-24 lg:w-32 duration-300'
                                    src={QueenCrown}
                                    alt='Queen Of Nature'
                                />
                                <div className='mx-7 items-center'>
                                    <div className='relative mb-14'>
                                        <span className='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-md'>
                                            Queen Of Nature
                                        </span>
                                        <span className='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                            Queen Of Nature
                                        </span>
                                    </div>
                                    <p className='text-gray-700 dark:text-gray-300'>
                                        เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ
                                        เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ
                                        เป็นงานอดิเรก <br />
                                        และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น
                                        โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์
                                        ให้ความรู้สึก และสัมผัสจากธรรมชาติ
                                    </p>
                                </div>
                            </Link>
                        </div>
                        {/* BRAND DESCRIPTION END*/}

                        {/* FOOTER TEXT START */}
                        <div className='grid grid-cols-2 gap-10 sm:gap-7 sm:grid-cols-3'>
                            <div className='text'>
                                <h2 className='mb-6 text-sm font-bold text-slate-500 uppercase dark:text-white'>
                                    Product
                                </h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                    <li className='mb-4'>
                                        <Link
                                            to='/products'
                                            className='hover:underline'
                                        >
                                            Shampoo
                                        </Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link
                                            to='/products'
                                            className='hover:underline'
                                        >
                                            Oil Face Wash
                                        </Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link
                                            to='/products'
                                            className='hover:underline'
                                        >
                                            Lotion
                                        </Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link
                                            to='/products'
                                            className='hover:underline'
                                        >
                                            Solid & Liquid Soup
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text'>
                                <h2 className='mb-6 text-sm font-bold text-slate-500 uppercase dark:text-white'>
                                    About Us
                                </h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                    <li className='mb-4'>
                                        <a
                                            href='https://goo.gl/maps/ia6fSjwQTuhFUYzs8'
                                            className='hover:underline'
                                            target='blank'
                                        >
                                            52 Soi Inthayongyot 2, <br />
                                            Amphoe Mueang, <br />
                                            Lamphun 51000
                                        </a>
                                    </li>
                                    <li className='mb-4'>
                                        <Link
                                            to='/contact'
                                            className='hover:underline'
                                        >
                                            Contact Person
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER TEXT END */}

                    {/* FOOTER COPYRIGHT & SOCIAL MEDIA ICON */}
                    <hr className='my-6 border-slate-300 sm:mx-auto dark:border-slate-500 lg:my-8 h-2' />
                    <div className='sm:flex sm:items-center sm:justify-between'>
                        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                            © 2023
                            <Link to='/' className='hover:underline ml-1'>
                                Queen Of Nature
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div className='flex mt-4 space-x-6 sm:justify-center text-2xl sm:mt-0'>
                            <a
                                href='#'
                                target='blank'
                                className='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <BsFacebook />
                                <span className='sr-only'>Facebook page</span>
                            </a>
                            <a
                                href='#'
                                target='blank'
                                className='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <RiInstagramFill />
                                <span className='sr-only'>Facebook page</span>
                            </a>
                            <a
                                href='#'
                                target='blank'
                                className='text-slate-500 hover:text-slate-500 dark:hover:text-white'
                            >
                                <BsLine />
                                <span className='sr-only'>Facebook page</span>
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
