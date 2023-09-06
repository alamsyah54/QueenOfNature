import React from "react"
import Nav from "../components/Nav"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import { BsArrowUpRightCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { contacts } from "../data/Data"

const ContactList = () => {
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient />
            <Nav />
            <section className='px-5 py-32 '>
                <div className='flex my-10 justify-center'>
                    <div className='relative'>
                        <span className='absolute text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-xl'>
                            Our Contact
                        </span>
                        <span className='relative text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                            Our Contact
                        </span>
                    </div>
                </div>
                <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {contacts.map((contact) => (
                        <div className='relative lg:rounded-[40px] rounded-3xl dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-700 dark:to-gray-900 bg-gradient-to-tr from-gray-50 via-gray-50 to-gray-300 border-[1.5px] dark:border-gray-600 border-white bg-clip-border drop-shadow-xl w-full'>
                            <div className='h-full w-full'>
                                <div className='flex w-full'>
                                    <div
                                        style={{
                                            backgroundImage: `url(${contact.image})`,
                                        }}
                                        className='h-96 w-full rounded-xl drop-shadow-md bg-cover bg-center justify-between flex items-start'
                                        alt=''
                                    >
                                        <span className='relative mt-[3%] text-4xl font-thin ml-5 dark:text-gray-300 text-gray-700 drop-shadow-md w-96'>
                                            {contact.name}
                                        </span>
                                        <div className='flex h-full items-end lg:-mt-8 lg:mr-8 p-10'>
                                            <Link
                                                target='_blank'
                                                to={contact.url}
                                                className='relative justify-center group cursor-pointer'
                                            >
                                                <div className='absolute text-6xl text-center bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full group-hover:shadow-inner group-hover:scale-95 group-hover:duration-300'>
                                                    <BsArrowUpRightCircleFill className='text-slate-100 p-1 hover:text-slate-200 dark:hover:text-slate-700 dark:text-slate-600 group-active:text-slate-300 dark:group-active:text-slate-800' />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactList
