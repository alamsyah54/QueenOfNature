import React from "react"
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"

import { useState, useEffect } from "react"
const DarkMode = (props) => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className='fixed z-30 bottom-[47%] left-5 drop-shadow-md'>
            <button
                onClick={handleThemeSwitch}
                class='relative p-1 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full'
            >
                <span class='w-full h-full rounded-full bg-gradient-to-tr from-blue-400 to-emerald-600 group-hover:from-blue-400 group-hover:via-sky-600 group-hover:to-emerald-600 absolute'></span>
                <span class='relative  px-2 py-2 transition-all ease-out dark:bg-slate-300 bg-slate-800  rounded-full group-hover:bg-opacity-0 duration-400'>
                    <div className='flex gap-5 items-center flex-col justify-center'>
                        <BsSunFill className='text-slate-200 dark:text-slate-700 text-sm lg:text-2xl' />
                        <div className='h-0.5 w-5 bg-slate-200 dark:bg-slate-700 flex items-center justify-center fixed mx-2'></div>
                        <BsFillMoonStarsFill className='text-slate-200 dark:text-slate-700 text-sm lg:text-2xl' />
                    </div>
                </span>
            </button>
        </div>
    )
}

export default DarkMode
