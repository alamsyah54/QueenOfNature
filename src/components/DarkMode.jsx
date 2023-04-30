import React from "react"
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"

import { useState, useEffect } from "react"

const DarkMode = () => {
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

    return (
        <div className='fixed z-[100000] bottom-[47%] left-5 drop-shadow-md'>
            <button
                onClick={handleThemeSwitch}
                className='relative p-1 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full'
            >
                <span className='w-full h-full rounded-full bg-gradient-to-tr from-blue-400 to-emerald-600 group-hover:from-blue-400 group-hover:via-sky-600 group-hover:to-emerald-600 absolute'></span>
                <span className='relative  px-2 py-2 transition-all ease-out dark:bg-slate-300 bg-slate-800  rounded-full group-hover:bg-opacity-0 duration-400'>
                    <div className='flex gap-5 items-center flex-col justify-center'>
                        <BsSunFill className='text-slate-200 dark:text-slate-700 text-sm lg:text-2xl' />
                        <div className='h-[2px] w-5 bg-slate-200 dark:bg-slate-700 flex items-center justify-center absolute mx-2'></div>
                        <BsFillMoonStarsFill className='text-slate-200 dark:text-slate-700 text-sm lg:text-2xl' />
                    </div>
                </span>
            </button>
        </div>
    )
}

export default DarkMode
