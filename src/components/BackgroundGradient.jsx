import React from "react"
import blob from "../assets/images/blob.svg"

const BackgroundGradient = () => {
    return (
        <div className='absolute justify-center items-center w-screen h-screen'>
            <div className='relative top-[30%] left-[40%]'>
                <div className='absolute -left-[500px] w-96 h-96 dark:bg-cyan-200 bg-cyan-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-xl opacity-30 dark:opacity-20  animate-blob animation-delay-2000'></div>
                <div className='absolute -left-[800px] w-96 h-96 dark:bg-emerald-200 bg-emerald-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-xl opacity-30 dark:opacity-20  animate-blob animation-delay-4000'></div>
                <div className='absolute left-52 w-72 h-72 dark:bg-emerald-200 bg-emerald-300 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-xl opacity-30 dark:opacity-20 animate-blob'></div>
                <div className='absolute left-[600px] w-72 h-72 dark:bg-sky-200 bg-sky-400 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000'></div>
                <div className='absolute left-[800px] w-52 h-52 dark:bg-yellow-200 bg-yellow-200 dark:mix-blend-normal rounded-full mix-blend-multiply filter  blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000'></div>
                {/* <div className='h-24 w-24 animate-blob'>
                    <div className='animate-spin animation-delay-4000'>
                        <img src={blob} alt='' className='w-32 h-32' />
                    </div>
                </div>
                <div className='h-24 w-24 animate-blob mt-40'>
                    <div className='h-24 w-24 animate-ping animation-delay-4000'>
                        <img src={blob} alt='' className='w-20 h-20' />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BackgroundGradient
