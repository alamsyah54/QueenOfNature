import React from "react"
import { MdShoppingCartCheckout } from "react-icons/md"
import { Link } from "react-router-dom"

const CheckoutButton = (props) => {
    return (
        <Link to='/order-with'>
            <div class='relative invisible md:visible lg:visible inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sky-600 transition duration-700 ease-out border-2  dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text border-sky-600 rounded-full shadow-md group'>
                <span class='absolute inset-0 flex items-center justify-center w-full h-full dark:text-slate-900 dark:bg-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-content dark:drop-shadow-sm text-white duration-700 -translate-x-full bg-sky-600 group-hover:translate-x-0 ease'>
                    <MdShoppingCartCheckout className='text-4xl text-center items-center' />
                </span>
                <span class='absolute flex font-bold items-center justify-center w-full h-full dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text text-sky-600 transition-all duration-300 transform group-hover:translate-x-full ease'>
                    Checkout Now!
                </span>
                <span class='relative invisible font-bold'>
                    {props.children}
                </span>
            </div>
        </Link>
    )
}

export default CheckoutButton
