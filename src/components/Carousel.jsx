import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import { slides } from "../data/Data"
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <section className='py-20'>
            <div className='text-sky-600 text-end py-10 mx-14 font-semibold text-3xl md:text-4xl lg:text-5xl dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                <span className='text-4xl'>Best Seller</span>
                <div className='flex items-center justify-end drop-shadow group'>
                    <span className='w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-300 mt-3'></span>
                    <span className='w-[160px] h-[2px] bg-gray-600 dark:bg-gray-300 block mt-3'></span>
                </div>
            </div>
            <div className='max-w-full m-auto py-5 lg:px-[10%] md:px-[20%] px-[10%] relative group'>
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image})`,
                    }}
                    className='flex justify-center items-center w-full h-full rounded-3xl bg-center bg-cover duration-500 drop-shadow-sm group-hover:drop-shadow-lg'
                >
                    <div className='relative flex flex-col justify-center items-center h-[500px] lg:h-[650px] py-24 z-50 drop-shadow-sm'>
                        <div className='rounded-3xl max-w-[70%] md:max-w-[60%] lg:max-w-[40%] dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-lg p-4 '>
                            <div className='h-full w-full'>
                                <div className='relative w-full'>
                                    <span className='absolute z-10 left-3 top-2 lg:text-lg lg:left-4 text-sm font-semibold text-white/20'>
                                        © Queen Of Nature
                                    </span>
                                    <img
                                        src={slides[currentIndex].image}
                                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full drop-shadow-md'
                                        alt=''
                                    />
                                </div>
                                <div className='flex justify-between px-1 md:items-start'>
                                    <span className='absolute drop-shadow-md bg-pink-500 px-1 right-4 rounded-md font-medium text-white'>
                                        <span className='flex items-center text-sm'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='white'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                className='w-3 h-3 lg:w-4 lg:h-4 mr-1'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                                                />
                                            </svg>
                                            Best Seller
                                        </span>
                                    </span>
                                    <div className='mb-2'>
                                        <p className='text-lg lg:text-xl font-bold text-navy-700 dark:text-gray-100 lg:py-2 pt-5'>
                                            {slides[currentIndex].title}
                                        </p>
                                        <p className='mt-2 text-xs lg:text-sm font-medium text-gray-600 md:mt-3 text-start dark:text-gray-300'>
                                            {slides[currentIndex].desc}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between '>
                                    <div className='lg:text-3xl text-2xl p-2 font-bold dark:text-gray-100'>
                                        ฿{slides[currentIndex].price}
                                    </div>
                                    <Link to='/'>
                                        <Button className='hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-900 active:bg-gray-400 dark:text-gray-200 border-gray-400 text-gray-800 bg-gray-200 dark:bg-gray-700 font-medium lg:rounded-xl rounded-lg capitalize text-xs px-3 py-1 lg:px-4 lg:py-2 text-center m-1 border-2'>
                                            More Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Left Arrow */}
                        <div
                            onClick={prevSlide}
                            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 hover:scale-110 duration-700 text-white cursor-pointer -mx-3'
                        >
                            <BsChevronCompactLeft size={20} />
                        </div>
                        {/* Right Arrow */}
                        <div
                            onClick={nextSlide}
                            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 hover:scale-110 duration-700 text-white cursor-pointer -mx-3'
                        >
                            <BsChevronCompactRight size={20} />
                        </div>
                    </div>
                    <div className='absolute backdrop-blur-sm w-full h-full z-40 rounded-3xl bg-gray-500/10 dark:bg-gray-500/30'></div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
