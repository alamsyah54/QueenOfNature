import React from "react"
import Shampoo from "../assets/images/shampoo.jpg"
import Lotion from "../assets/images/lotion.jpg"
import Oil from "../assets/images/oil.jpg"
import Spray from "../assets/images/spray.jpg"
import Soap from "../assets/images/soap.jpg"
import { Link } from "react-router-dom"

const CategorySection = () => {
    return (
        <div className='border-t-2 border-sky-500'>
            <div className='text-sky-600 text-start py-10 mx-14 font-semibold text-3xl md:text-4xl lg:text-5xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                <span className='text-4xl'>Category</span>
                <div className='flex items-center drop-shadow'>
                    <span className='w-[145px] h-[2px] bg-gray-600 dark:bg-gray-300 block mt-3'></span>
                    <span className='w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-300 mt-3'></span>
                </div>
            </div>
            <section className='py-10 flex justify-center '>
                <div className='gap-5 lg:gap-10 grid grid-cols-2 md:grid-cols-3 lg:flex'>
                    <Link to='/'>
                        <div
                            className='group bg-cover cursor-pointer group bg-center grayscale hover:grayscale-0 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-2xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                            style={{ backgroundImage: `url(${Shampoo})` }}
                        >
                            <div className='text-start duration-500 group-hover:text-emerald-400 text-black text-xl font-mono font-semibold p-[10%]'>
                                Shampoo
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div
                            className='group bg-cover cursor-pointer bg-center grayscale hover:grayscale-0 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-2xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                            style={{ backgroundImage: `url(${Lotion})` }}
                        >
                            <div className='text-start duration-500 group-hover:text-yellow-400 drop-shadow-sm text-black text-xl font-mono font-semibold p-[10%]'>
                                Lotion
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        {" "}
                        <div
                            className='group bg-cover cursor-pointer bg-center grayscale hover:grayscale-0 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-2xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                            style={{ backgroundImage: `url(${Spray})` }}
                        >
                            <div className='text-start duration-500 group-hover:text-teal-400 drop-shadow text-black text-xl font-mono font-semibold p-[10%]'>
                                Spray
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        {" "}
                        <div
                            className='group bg-cover cursor-pointer bg-center grayscale hover:grayscale-0 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-2xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                            style={{ backgroundImage: `url(${Soap})` }}
                        >
                            <div className='text-start duration-500 group-hover:text-gray-400 text-black text-xl font-mono font-semibold p-[10%]'>
                                Soap
                            </div>
                        </div>
                    </Link>
                    <Link to='/'>
                        {" "}
                        <div
                            className='group bg-cover cursor-pointer bg-center grayscale hover:grayscale-0 w-52 h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-2xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                            style={{ backgroundImage: `url(${Oil})` }}
                        >
                            <div className='text-start duration-500 group-hover:text-orange-400 text-black text-xl font-mono font-semibold p-[10%]'>
                                Oil
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default CategorySection
