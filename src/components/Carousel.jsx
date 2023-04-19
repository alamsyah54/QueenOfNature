import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { Link } from "react-router-dom"
import BestSeller1 from "../assets/images/bestseller1.png"
import BestSeller2 from "../assets/images/bestseller2.png"
import BestSeller4 from "../assets/images/bestseller4.png"
import { Button, Chip, IconButton } from "@material-tailwind/react"

const Carousel = () => {
    const slides = [
        {
            price: "฿70",
            desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
            number: 1,
            title: "Kaffir Lime Shampoo",
            image: BestSeller1,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
            number: 2,
            title: "Jasmine Lotion",
            image: BestSeller2,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
            number: 3,
            title: "Nourishing Rice Lotion",
            image: BestSeller4,
        },
    ]

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
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-5 relative group'>
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image})`,
                    }}
                    className='flex justify-center items-center w-full h-full rounded-3xl bg-center bg-cover duration-500 drop-shadow-sm group-hover:drop-shadow-lg'
                >
                    <div className='flex flex-col justify-center items-center h-[80%] z-50 drop-shadow-sm'>
                        <div className='!z-5 relative flex flex-col rounded-3xl max-w-[70%] md:max-w-[60%] lg:max-w-[40%] dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-lg  w-full !p-4 3xl:p-![18px] '>
                            <div className='h-full w-full'>
                                <div className='relative w-full'>
                                    <img
                                        src={slides[currentIndex].image}
                                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full drop-shadow-md'
                                        alt=''
                                    />
                                </div>
                                <div className='mb-3 flex items-center justify-between px-1 md:items-start'>
                                    <span className='absolute drop-shadow-md bg-pink-500 px-2 right-4 rounded-md font-medium text-white'>
                                        <span className='flex items-center'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='white'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='w-5 h-5 mr-1'
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
                                        <p className='text-2xl font-bold text-navy-700 dark:text-white py-2'>
                                            {slides[currentIndex].title}
                                        </p>
                                        <p className='mt-2 px-5 text-sm font-medium text-gray-600 md:mt-3 text-center dark:text-gray-300'>
                                            {slides[currentIndex].desc}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between '>
                                    <div className='text-4xl p-2 font-bold dark:text-white'>
                                        {slides[currentIndex].price}
                                    </div>
                                    <Link to='/'>
                                        <Button className='active:bg-gray-400 dark:text-gray-200 border-gray-400 text-gray-800 bg-gray-200 dark:bg-gray-700 font-medium rounded-xl capitalize text-sm px-5 py-2 text-center m-1 border-2'>
                                            Buy Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute backdrop-blur-sm w-full h-full z-40 rounded-3xl bg-gray-500/10 dark:bg-gray-500/30'></div>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 hover:scale-110 duration-700 text-white cursor-pointer mx-5'>
                    <BsChevronCompactLeft onClick={prevSlide} size={20} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 hover:scale-110 duration-700 text-white cursor-pointer mx-5'>
                    <BsChevronCompactRight onClick={nextSlide} size={20} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer my-2'
                        >
                            <RxDotFilled className='dark:bg-gray-300 border bg-slate-400 border-gray-200 gap-20 rounded-lg px-3 -py-2 text-xs mx-5 drop-shadow-lg hover:scale-x-125 duration-500 active:bg-gray-600' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel
