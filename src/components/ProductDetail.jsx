import Navbar from "../components/Navbar"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import React, { Fragment, useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"
import { useParams } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Button, Dialog } from "@material-tailwind/react"
import { products, slides } from "../data/Data"

const ProductList = () => {
    const { productId } = useParams()
    const thisProduct = products.find((prod) => prod.id === parseInt(productId))
    if (!thisProduct) {
        return <p>Product not found</p>
    }
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
    const currentImages = Object.values(thisProduct.images)[currentIndex]
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient />
            <Navbar />
            <section className='px-5 py-32 '>
                <div className='flex my-10 justify-center'>
                    <div className='relative'>
                        <span className='absolute text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-xl'>
                            PRODUCT
                        </span>
                        <span className='relative text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                            PRODUCT
                        </span>
                    </div>
                </div>
                <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='relative rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-lg  w-full p-4 '
                        >
                            <div className='h-full w-full'>
                                <div className='relative w-full'>
                                    <span className='opacity-0 group-hover:opacity-100 duration-500 absolute z-10 left-3 top-2 lg:text-lg lg:left-4 text-sm font-semibold text-white/30'>
                                        © Queen Of Nature
                                    </span>
                                    <img
                                        src={product.mainImage}
                                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full drop-shadow-md'
                                        alt=''
                                    />
                                </div>
                                <div className='flex justify-between px-1 md:items-start'>
                                    <span className='absolute drop-shadow-md bg-pink-500 px-1 right-4 rounded-md font-medium text-white'>
                                        <span className='flex items-center text-sm'>
                                            <svg
                                                xmlns='http:www.w3.org/2000/svg'
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
                                        <p className='text-2xl font-bold text-navy-700 dark:text-gray-100 lg:py-2 pt-5'>
                                            {product.name}
                                        </p>
                                        <p className='mt-2 text-sm font-medium text-gray-600 md:mt-3 text-start dark:text-gray-300'>
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between '>
                                    <div className='lg:text-4xl text-3xl p-2 font-bold dark:text-gray-100'>
                                        ฿{product.price}
                                    </div>
                                    <Link>
                                        <Button className='hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-900 active:bg-gray-400 dark:text-gray-200 border-gray-400 text-gray-800 bg-gray-200 dark:bg-gray-700 font-medium rounded-xl capitalize text-sm px-5 py-2 text-center m-1 border-2'>
                                            Buy Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Fragment>
                    <Dialog
                        open={open}
                        animate={{
                            mount: { scale: 0.8, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                        className='flex flex-col lg:flex-row w-[100%] h-[100%] rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-xl p-5 gap-4 lg:p-8 duration-500'
                    >
                        <div className='flex items-center flex-col w-[100%] h-[50%] lg:h-[100%] lg:w-[50%]'>
                            <div
                                className='w-full h-full flex justify-between items-center rounded-3xl bg-center bg-cover overflow-clip shadow-xl'
                                style={{
                                    backgroundImage: `url(${currentImages})`,
                                }}
                            />
                            <div className='flex justify-between gap-3 pt-2 lg:pt-3 w-full'>
                                {thisProduct.images.map((slide, slideIndex) => (
                                    <div className='overflow-clip rounded-xl group shadow-lg hover:shadow-xl duration-500 border-[2.5px] hover:border-sky-600 border-white dark:border-gray-500'>
                                        <img
                                            src={
                                                Object.values(
                                                    thisProduct.images
                                                )[slideIndex]
                                            }
                                            onClick={() =>
                                                goToSlide(slideIndex)
                                            }
                                            className='flex group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-inner shadow-xl duration-500 rounded-xl lg:h-44 w-20 lg:w-44 h-20 bg-center bg-cover'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-row w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:px-5'>
                            <div className='text-start text-gray-900 dark:text-gray-200'>
                                <div className='lg:text-4xl text-2xl font-semibold'>
                                    {thisProduct.name}
                                </div>
                                <div className='lg:text-2xl text-lg italic inline-flex items-center gap-1'>
                                    <BiCategoryAlt />
                                    {thisProduct.category}
                                </div>
                            </div>
                        </div>
                        <Link to={"/productlist"}>
                            <AiFillCloseCircle className='fixed justify-end w-14 lg:w-18 h-14 lg:h-18 items-end left-[48%] -bottom-10 cursor-pointer hover:text-red-500 text-red-500/80 dark:grayscale-0 dark:text-gray-400 dark:hover:text-red-500 grayscale hover:grayscale-0 hover:scale-150 duration-300' />
                        </Link>
                    </Dialog>
                </Fragment>
            </section>
            <DarkMode />
            <Footer />
        </div>
    )
}

export default ProductList