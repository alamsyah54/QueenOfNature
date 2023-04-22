import React from "react"
import shampoo from "../assets/images/2shampoo.png"
import { Link } from "react-router-dom"
import { AiOutlineDown } from "react-icons/ai"

const HeroSection = () => {
    return (
        <div className='relative items-center justify-center py-4 lg:py-28 h-screen w-screen'>
            <section className='w-full md:flex lg:flex lg:items-center mt-24 px-10 lg:px-52 lg:mt-16'>
                {/* MAIN SHAMPOO PICTURE START */}
                <div className='flex justify-evenly lg:w-[35%] animate-hero'>
                    <img
                        src={shampoo}
                        alt=''
                        className='bg-center lg:relative bg-cover w-[80%] md:w-[60%] lg:w-[80%] drop-shadow-2xl'
                    />
                </div>
                {/* MAIN SHAMPOO PICTURE END */}

                {/* MAIN TEXT START */}
                <div className='w-full md:w-[80%] lg:w-[65%] flex justify-end items-center'>
                    <div className='text-center lg:text-end md:text-end'>
                        <div className='relative'>
                            <span className='absolute text-sky-600 font-bold text-4xl md:text-5xl lg:text-7xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-md dark:opacity-80'>
                                Queen Of Nature
                            </span>
                            <span className='relative text-sky-600 font-bold text-4xl md:text-5xl lg:text-7xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                Queen Of Nature
                            </span>
                        </div>

                        <p className='text-lg lg:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-5'>
                            เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ <br />
                            เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ
                            เป็นงานอดิเรก
                            <br />
                            และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น
                            โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์
                            <br />
                            ให้ความรู้สึก และสัมผัสจากธรรมชาติ
                        </p>
                        <Link
                            to='/productlist'
                            class='my-10 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full'
                        >
                            <span class='group w-full h-full group-hover:drop-shadow-md hover:shadow-xl bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 absolute ' />
                            <span class='relative px-6 py-3 hover:text-black text-gray-700 dark:text-white  rounded-full transition-all ease-out bg-slate-200 dark:bg-gray-900 group-hover:bg-opacity-0 duration-700'>
                                View Product
                            </span>
                        </Link>
                        {/* MAIN TEXT END */}
                    </div>
                </div>
            </section>
            <div className='flex justify-center text-sm flex-col items-center animate-bounce lg:my-36 md:my-24'>
                <span className='text-sky-600 text-center'>Category</span>
                <AiOutlineDown className='flex text-sky-600' size={20} />
            </div>
        </div>
    )
}

export default HeroSection
