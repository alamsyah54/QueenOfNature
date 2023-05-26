import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"

import React, { useState, useEffect } from "react"

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
        <div className='fixed z-[999999] bottom-[47%] left-5 drop-shadow-md'>
            <button
                onClick={handleThemeSwitch}
                className='relative inline-flex items-center justify-center p-1 overflow-hidden font-semibold rounded-full group'
            >
                <span className='absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-400 to-emerald-600 group-hover:from-blue-400 group-hover:via-sky-600 group-hover:to-emerald-600'></span>
                <span className='relative px-2 py-2 transition-all ease-out rounded-full dark:bg-slate-300 bg-slate-800 group-hover:bg-opacity-0 duration-400'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <BsSunFill className='text-sm text-slate-200 dark:text-slate-700 lg:text-2xl' />
                        <div className='h-[2px] w-5 bg-slate-200 dark:bg-slate-700 flex items-center justify-center absolute mx-2'></div>
                        <BsFillMoonStarsFill className='text-sm text-slate-200 dark:text-slate-700 lg:text-2xl' />
                    </div>
                </span>
            </button>
        </div>
    )
}

export default DarkMode
