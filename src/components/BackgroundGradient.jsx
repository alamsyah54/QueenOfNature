import React from "react"

const BackgroundGradient = () => {
    return (
        <div className='relative w-screen'>
            <div className='relative top-[30%] left-[40%]'>
                <div className='absolute -left-[500px] w-96 h-96 dark:bg-cyan-200 bg-cyan-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-3xl opacity-40 dark:opacity-20  animate-blob animation-delay-2000'></div>
                <div className='absolute -left-[800px] w-96 h-96 dark:bg-emerald-200 bg-emerald-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-3xl opacity-40 dark:opacity-20  animate-blob animation-delay-4000'></div>
                <div className='absolute left-52 w-72 h-72 dark:bg-emerald-200 bg-emerald-300 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-3xl opacity-40 dark:opacity-20 animate-blob'></div>
                <div className='absolute left-[600px] w-72 h-72 dark:bg-sky-200 bg-sky-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000'></div>
                <div className='absolute left-[800px] w-52 h-52 dark:bg-yellow-200 bg-yellow-200 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000'></div>
            </div>
        </div>
    )
}

export default BackgroundGradient
