import React from "react"
import { Link } from "react-router-dom"
import { categories } from "../data/Data"

const CategorySection = () => {
    return (
        <>
            <div className='text-sky-600 text-start py-10 mx-14 font-semibold text-3xl md:text-4xl lg:text-5xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                <span className='text-4xl'>Category</span>
                <div className='flex items-center drop-shadow'>
                    <span className='w-[145px] h-[2px] bg-gray-600 dark:bg-gray-300 block mt-3'></span>
                    <span className='w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-300 mt-3'></span>
                </div>
            </div>
            <section className='py-10 flex justify-center'>
                <div className='sm:gap-5 gap-5 lg:gap-10 grid grid-cols-2 md:grid-cols-3 lg:flex'>
                    {categories.map((category) => (
                        <Link to='/'>
                            <div
                                className='group bg-cover cursor-pointer group bg-center w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-3xl shadow-inner drop-shadow-xl hover:scale-110 hover:rotate-2 duration-700 overflow-hidden'
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                }}
                            >
                                <div className='text-start duration-500 group-hover:text-emerald-400 text-black text-xl font-mono font-semibold p-[10%]'>
                                    {category.title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CategorySection
