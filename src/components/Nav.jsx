import { useState, useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { SlClose, SlHome } from "react-icons/sl"
import QueenCrown from "/assets/images/QueenCrown.webp"
import { BsBoxSeam, BsTelephone } from "react-icons/bs"
import { Link } from "react-router-dom"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { MdShoppingCartCheckout } from "react-icons/md"
import MainLogo from "/assets/images/Queen.webp"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme")
        return storedTheme !== null ? storedTheme : "light"
    })

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset

            // Check if the user has scrolled down 100px or more
            if (scrollTop > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <nav
            className={`z-50 w-full ${
                isScrolled
                    ? "fixed transition-all top-0 backdrop-blur-xl lg:border-b-[0.2px] border-b-[0.5px] border-gray-400 dark:border-gray-500"
                    : "fixed transition-all top-0 backdrop-blur-xl"
            }`}
        >
            <div className='flex items-center py-5 lg:p-5 md:p-5 justify-between lg:justify-evenly md:justify-evenly'>
                <Link
                    to={"/"}
                    className='flex items-end justify-center text-gray-300 dark:text-transparent dark:bg-gradient-to-tl dark:from-cyan-300 dark:to-fuchsia-400 bg-clip-text fade-right'
                >
                    <img
                        className='w-20 duration-300 lg:w-28 md:w-28 drop-shadow-md mx-10'
                        src={MainLogo}
                        alt='Queen Of Nature'
                    />
                </Link>
                <div className='items-center justify-center hidden lg:flex md:flex divide-x-2  gap-5 divide-sky-600/50'>
                    <div className='flex gap-5 font-conthrax'>
                        <Link
                            to='/'
                            className='flex text-center gap-2 md:gap-1 md:text-lg lg:text-xl items-center text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:bg-clip-text'
                        >
                            <SlHome className='dark:text-sky-600' />
                            <span>Home</span>
                        </Link>
                        <Link
                            to='/products'
                            className='flex text-center gap-2 md:gap-1 md:text-lg lg:text-xl items-center text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:bg-clip-text'
                        >
                            <BsBoxSeam className='dark:text-sky-600' />
                            <span>Products</span>
                        </Link>
                        <Link
                            to='/contact'
                            className='flex text-center gap-2 md:gap-1 md:text-lg lg:text-xl items-center text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 dark:text-transparent dark:bg-gradient-to-tr dark:from-blue-400 dark:to-emerald-400 dark:bg-clip-text'
                        >
                            <BsTelephone className='dark:text-sky-600' />
                            <span>Contact</span>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between gap-3 pl-5'>
                        <Link to='/order-with'>
                            <div className='relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                                <span className='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-700 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                                    <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                                </span>
                                <span className='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                                    Checkout Now!
                                </span>
                                <span className='relative invisible font-bold'>
                                    Checkout Now!
                                </span>
                            </div>
                        </Link>
                        <button
                            onClick={handleThemeSwitch}
                            className='relative items-center justify-center lg:p-2'
                        >
                            <BsSunFill className='absolute text-xl drop-shadow-md opacity-0 dark:opacity-100 dark:text-gray-300 lg:text-3xl' />
                            <BsFillMoonStarsFill className='text-xl text-gray-600 drop-shadow dark:opacity-0  lg:text-3xl' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5 text-2xl md:hidden lg:hidden mx-10'>
                    <button
                        onClick={handleThemeSwitch}
                        className='relative items-center justify-center p-2 delay-1000'
                    >
                        <BsSunFill className='absolute opacity-0 dark:opacity-100 dark:text-gray-200' />
                        <BsFillMoonStarsFill className='text-gray-700 dark:opacity-0 ' />
                    </button>
                    <button
                        onClick={handleNav}
                        className='delay-1000 cursor-pointer'
                    >
                        <AiOutlineMenu
                            size={35}
                            className='flex text-gray-700 duration-300 hover:text-gray-700 dark:text-gray-200'
                        />
                    </button>
                </div>
            </div>

            <div
                className={
                    nav
                        ? "fixed left-0 top-0 justify-center w-full h-screen items-center drop-shadow-2xl z-50 duration-1000 transition-all backdrop-blur-sm rounded-t-3xl bg-gray-200/90 dark:bg-gray-900/90"
                        : "fixed left-[-150%] top-0 w-[100%] h-screen z-50 duration-700 transition-all"
                }
            >
                <div className='z-50 flex items-center rounded-3xl py-5 drop-shadow-2xl dark:border-slate-800 border-b-[40%] dark:bg-slate-800 bg-gray-200'>
                    <div className='flex items-center w-full px-10'>
                        <Link
                            to='/'
                            className='flex items-center justify-center text-gray-300'
                        >
                            <div className='cursor-pointer'>
                                <img
                                    className='duration-300 w-20 lg:w-16 md:w-10 drop-shadow-md'
                                    src={MainLogo}
                                    alt='Queen Of Nature'
                                />
                            </div>
                        </Link>
                    </div>
                    <SlClose
                        onClick={() => setNav(!nav)}
                        size={35}
                        className='right-0 mx-10 cursor-pointer text-fuchsia-600 drop-shadow-md'
                    />
                </div>
                <div className='flex flex-col rounded-md h-screen'>
                    <div className='flex flex-col py-10 gap-7'>
                        <ul className='flex flex-col gap-10 pt-5 pb-10 text-gray-800 justify-center items-center font-semibold'>
                            <li className='flex text-center gap-2 text-2xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 drop-shadow-sm'>
                                <SlHome className='dark:text-blue-400' />
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='flex text-center gap-2 text-2xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 drop-shadow-sm'>
                                <BsBoxSeam className='dark:text-blue-400' />
                                <Link to='/products'>Products</Link>
                            </li>
                            <li className='flex text-center gap-2 text-2xl items-center dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 dark:hover:text-sky-300 hover:scale-105 hover:-mt-2 duration-300  hover:text-gray-800 drop-shadow-sm'>
                                <BsTelephone className='dark:text-blue-400' />
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <div className='flex flex-col items-center w-full'>
                            <Link to='/order-with'>
                                <div className='relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                                    <span className='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-700 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                                        <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                                    </span>
                                    <span className='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                                        Checkout Now!
                                    </span>
                                    <span className='relative invisible font-bold'>
                                        Checkout Now!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className='absolute bottom-0 left-0 w-full my-32 lg:mb-[999px]'>
                            <div className='flex justify-center items-center'>
                                <div className='flex'>
                                    <Link to='/'>
                                        <img
                                            className='bg-local w-24  duration-300'
                                            src={QueenCrown}
                                            alt='Queen Of Nature'
                                        />
                                        <div className='flex justify-center'>
                                            <span className='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-md'>
                                                Queen Of Nature
                                            </span>
                                            <span className='absolute mb-2 text-2xl lg:text-4xl font-bold text-sky-600 dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                                                Queen Of Nature
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
