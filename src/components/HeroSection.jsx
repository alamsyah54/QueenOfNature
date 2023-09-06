import React from "react"
import HeroImages from "/assets/images/MAINBG.webp"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <div className='relative items-center justify-center py-24'>
            <section className='relative w-full md:flex lg:flex lg:items-center mt-2 lg:px-28 lg:mt-16'>
                {/* MAIN SHAMPOO PICTURE START */}
                <div className='flex justify-center items-center md:w-[80%] lg:mb-5  md:mb-5 mb-2'>
                    <img
                        src={HeroImages}
                        alt=''
                        className='flex duration-700 bg-center bg-no-repeat lg:relative bg-cover sm:w-[55%] w-[70%] md:w-[100%] lg:w-[85%] drop-shadow-2xl'
                    />
                </div>
                {/* MAIN SHAMPOO PICTURE END */}
                {/* MAIN TEXT START */}
                <div className='w-full md:w-[80%] lg:w-[65%] flex justify-end items-center'>
                    <div className='text-center lg:text-end md:text-end md:px-12'>
                        <div className='relative'>
                            <span className='absolute text-sky-600 font-bold text-4xl md:text-5xl lg:text-7xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-md dark:opacity-80'>
                                Queen Of Nature
                            </span>
                            <span className='relative text-sky-600 opacity-0 dark:opacity-100 font-bold text-4xl md:text-5xl lg:text-7xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                Queen Of Nature
                            </span>
                        </div>
                        <p className='text-lg lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-5 md:text-md'>
                            เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ <br />
                            เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ
                            เป็นงานอดิเรก และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น
                            โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์
                            ให้ความรู้สึก และสัมผัสจากธรรมชาติ
                        </p>

                        <Link
                            to='/products'
                            className='mt-10 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'
                        >
                            <span className='absolute group w-full h-full group-hover:drop-shadow-md hover:shadow-xl bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 ' />
                            <span className='group w-full h-full group-hover:drop-shadow-md hover:shadow-xl bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 absolute ' />
                            <span className='relative px-6 py-3 hover:text-black text-gray-700 dark:text-white  rounded-full transition-all ease-out bg-slate-200 dark:bg-gray-900 group-hover:bg-opacity-0 duration-700'>
                                View Product
                            </span>
                        </Link>
                        {/* MAIN TEXT END */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
