import React, { useState, useEffect } from "react"
import Nav from "../components/Nav"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import { products } from "../data/Data"
const ProductList = () => {
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
            <Nav />
            <section className='px-5 py-32 min-h-screen'>
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
                            className='relative rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-l  w-full p-4 transition-opacity duration-500'
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
                <BackgroundGradient />
            </section>
            <BackgroundGradient />
            <Footer />
        </div>
    )
}

export default ProductList
