import Navbar from "../components/Navbar"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import React, { Fragment, useState, useEffect } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button, Dialog } from "@material-tailwind/react"
import { products, carousel } from "../data/Data"
import { MdShoppingCartCheckout } from "react-icons/md"

const ProductList = () => {
    const { productId } = useParams()
    const thisProduct = products.find((prod) => prod.id === parseInt(productId))
    if (!thisProduct) {
        return <p>Product not found</p>
    }
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? carousel.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === carousel.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    const currentImages = Object.values(thisProduct.images)[currentIndex]
    const Back = () => {
        history.back()
    }
    const [category, setCategory] = useState(
        localStorage.getItem("selectedCategory") || "all"
    )

    const productsToShow =
        category === "all"
            ? products
            : products.filter((product) => product.category === category)

    useEffect(() => {
        localStorage.setItem("selectedCategory", category)
    }, [category])

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory)
    }
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient />
            <Navbar />
            <section className='px-5 lg:py-32'>
                <div className='flex my-10 justify-center'>
                    <div className='relative group'>
                        <div className='absolute inset-0 dark:bg-gradient-to-tr from-blue-400 to-emerald-400 dark:blur-md rounded-xl opacity-60 group-hover:opacity-100 transition duration-200'></div>
                        <div className='lg:px-2 lg:py-3 py-2 grid grid-cols-3 lg:flex rounded-xl dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-700 dark:to-gray-900 from-gray-100 via-gray-100 to-gray-300 border-2 dark:border-gray-600 border-white bg-clip-border drop-shadow-xl shadow-lg justify-center lg:divide-x lg:divide-gray-300 dark:divide-gray-500 bg-gradient-to-tr'>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() => handleCategoryChange("all")}
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "all"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    All
                                </button>
                            </div>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() =>
                                        handleCategoryChange("Shampoo")
                                    }
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "Shampoo"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    Shampoo
                                </button>
                            </div>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() =>
                                        handleCategoryChange("Lotion")
                                    }
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "Lotion"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    Lotion
                                </button>
                            </div>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() => handleCategoryChange("Oil")}
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "Oil"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    Oil
                                </button>
                            </div>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() =>
                                        handleCategoryChange("Spray")
                                    }
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "Spray"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    Spray
                                </button>
                            </div>
                            <div className='flex p-2 lg:px-5 cursor-pointer justify-center'>
                                <button
                                    onClick={() => handleCategoryChange("Soap")}
                                    className={
                                        "cursor-pointer lg:p-0 hover:text-sky-800 rounded-md relative text-2xl lg:text-3xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:hover:from-blue-300 dark:hover:to-emerald-300 transition duration-300 dark:bg-clip-text" +
                                        (category == "Soap"
                                            ? " lg:border-0 border-b border-sky-600 dark:border-sky-500 pb-1 lg:text-sky-300 lg:drop-shadow-sm dark:from-blue-200 dark:to-emerald-200"
                                            : " lg:border-0 border-0 pb-1 hover:scale-105")
                                    }
                                >
                                    Soap
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {productsToShow.map((product) => (
                        <div
                            key={product.id}
                            className='relative rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-lg  w-full p-4'
                        >
                            <div className='h-full w-full'>
                                <div className='flex w-full group'>
                                    <img
                                        src={product.mainImage}
                                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full drop-shadow-md'
                                        alt=''
                                    />
                                </div>
                                <div className='flex justify-between px-1 self-end w-full'>
                                    {product.bestseller}
                                    <div className='mb-2'>
                                        <p className='text-2xl font-bold text-navy-700 dark:text-gray-100 lg:py-2 pt-5'>
                                            {product.name}
                                        </p>
                                        <p className='mt-2 text-sm font-medium text-gray-600 md:mt-3 text-start dark:text-gray-300'>
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex justify-between self-end w-full'>
                                    <div className='lg:text-4xl text-3xl p-2 font-bold dark:text-gray-100'>
                                        ฿{product.price}
                                    </div>
                                    <Link to={`/products/${product.id}`}>
                                        <Button className='hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-900 active:bg-gray-400 dark:text-gray-200 border-gray-400 text-gray-800 bg-gray-200 dark:bg-gray-700 font-medium rounded-xl capitalize text-sm px-5 py-2 text-center m-1 border-2'>
                                            More Details
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
                        className='flex flex-col lg:flex-row rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-xl p-5 gap-4 lg:p-8 duration-500 overflow-y-auto'
                    >
                        <div className='flex items-center flex-col w-[100%] h-[50%] lg:h-[100%] lg:w-[70%]'>
                            <div
                                className='w-full h-full flex justify-between items-center rounded-xl bg-center bg-cover overflow-clip shadow-xl'
                                style={{
                                    backgroundImage: `url(${currentImages})`,
                                }}
                            />
                            <div className='flex justify-center gap-5 pt-2 lg:pt-3 w-full'>
                                {thisProduct.images.map((slide, slideIndex) => (
                                    <div className='overflow-clip rounded-xl group shadow-lg hover:shadow-xl duration-500 border-[2.5px] hover:border-sky-600 dark:hover:border-sky-300 border-white dark:border-gray-500'>
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
                        <div className='flex flex-row w-[100%] h-[50%] lg:h-[100%] lg:w-[50%] lg:p-24 items-center justify-center'>
                            <div className='text-gray-900 dark:text-gray-200 justify-between flex flex-col w-full h-full gap-1'>
                                <div>
                                    <div className='lg:text-4xl flex text-2xl font-semibold justify-between'>
                                        <span className='relative text-center font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                            {thisProduct.name}
                                        </span>
                                        <div className='lg:text-2xl text-lg italic inline-flex items-center gap-1 my-2'>
                                            <BiCategoryAlt />
                                            {thisProduct.category}
                                        </div>
                                    </div>
                                    <div className='h-[60%]'>
                                        <div className='lg:text-4xl text-2xl font-semibold'>
                                            <div className='lg:text-2xl text-lg font-thin lg:my-5'>
                                                {thisProduct.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:text-xl text-lg lg:gap-5 justify-center flex items-center'>
                                    <span className='text-left flex'>
                                        <table className='table-full'>
                                            <tbody>
                                                <tr className='border-y dark:border-gray-300 border-gray-500 align-top'>
                                                    <td className='pr-5 py-3 font-bold'>
                                                        Verification Number
                                                    </td>
                                                    <td className='py-3'>
                                                        {thisProduct.verified}
                                                    </td>
                                                </tr>
                                                <tr className='border-b dark:border-gray-300 border-gray-500 align-top'>
                                                    <td className='pr-5 py-3 font-bold'>
                                                        Ingredients
                                                    </td>
                                                    <td className='py-3'>
                                                        {
                                                            thisProduct.ingredients
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className='border-b dark:border-gray-300 border-gray-500 align-top'>
                                                    <td className='pr-5 py-3 font-bold'>
                                                        How to use
                                                    </td>
                                                    <td className='py-3'>
                                                        {thisProduct.howtouse}
                                                    </td>
                                                </tr>
                                                <tr className='border-b dark:border-gray-300 border-gray-500 align-top'>
                                                    <td className='pr-5 py-3 font-bold'>
                                                        Properties
                                                    </td>
                                                    <td className='py-3'>
                                                        {thisProduct.properties}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </span>
                                </div>
                                <div className='justify-between flex my-3'>
                                    <span className='lg:text-6xl text-center text-5xl font-bold px-3'>
                                        ฿{thisProduct.price}
                                    </span>
                                    <Link to='/order-with'>
                                        <div className='relative inline-flex items-center lg:text-2xl justify-center px-5 py-1 lg:py-3 lg:px-7 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                                            <span className='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-900 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                                                <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                                            </span>
                                            <span className='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                                                Order With
                                            </span>
                                            <span className='relative invisible font-bold'>
                                                Order With
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link onClick={Back}>
                            <div className='fixed top-0 right-0 rounded-full font-sans cursor-pointer dark:text-red-500 text-red-500 dark:hover:text-red-500 text-3xl active:text-red-700 duration-300'>
                                <AiOutlineCloseCircle className='w-14 lg:w-18 h-14 lg:h-18 drop-shadow' />
                            </div>
                            {/*  */}
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
