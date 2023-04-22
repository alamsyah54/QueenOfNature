import React from "react"
import Navbar from "../components/Navbar"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import BestSeller1 from "../assets/images/bestseller1.png"
import BestSeller2 from "../assets/images/bestseller2.png"
import BestSeller4 from "../assets/images/bestseller4.png"

const ProductList = () => {
    const product = [
        {
            price: "฿70",
            desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
            number: 1,
            title: "Kaffir Lime Shampoo",
            image: BestSeller1,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
            number: 2,
            title: "Jasmine Lotion",
            image: BestSeller2,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
            number: 3,
            title: "Nourishing Rice Lotion",
            image: BestSeller4,
        },
        {
            price: "฿70",
            desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
            number: 1,
            title: "Kaffir Lime Shampoo",
            image: BestSeller1,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
            number: 2,
            title: "Jasmine Lotion",
            image: BestSeller2,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
            number: 3,
            title: "Nourishing Rice Lotion",
            image: BestSeller4,
        },
        {
            price: "฿70",
            desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
            number: 1,
            title: "Kaffir Lime Shampoo",
            image: BestSeller1,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
            number: 2,
            title: "Jasmine Lotion",
            image: BestSeller2,
        },
        {
            price: "฿70",
            desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
            number: 3,
            title: "Nourishing Rice Lotion",
            image: BestSeller4,
        },
    ]
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient />
            <Navbar />
            <section className='px-5 py-32 '>
                <div className='flex my-10 justify-center'>
                    <div className='relative'>
                        <span className='absolute text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text dark:blur-xl'>
                            PRODUCT
                        </span>
                        <span className='relative text-5xl text-center text-sky-600 font-bold dark:text-transparent dark:bg-gradient-to-tr from-blue-400 to-emerald-400 bg-clip-text'>
                            PRODUCT
                        </span>
                    </div>
                </div>
                <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {product.map((product) => (
                        <div className='relative rounded-3xl dark:bg-gray-800 bg-gray-100 bg-clip-border drop-shadow-lg  w-full !p-4 3xl:p-![18px] '>
                            <div className='h-full w-full'>
                                <div className='relative w-full'>
                                    <span className='absolute z-10 left-3 top-2 lg:text-lg lg:left-4 text-sm font-semibold text-white/30'>
                                        © Queen Of Nature
                                    </span>
                                    <img
                                        src={product.image}
                                        className='mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full drop-shadow-md'
                                        alt=''
                                    />
                                </div>
                                <div className='flex justify-between px-1 md:items-start'>
                                    <span className='absolute drop-shadow-md bg-pink-500 px-1 right-4 rounded-md font-medium text-white'>
                                        <span className='flex items-center text-sm'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='white'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                className='w-3 h-3 lg:w-4 lg:h-4 mr-1'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                                                />
                                            </svg>
                                            Best Seller
                                        </span>
                                    </span>
                                    <div className='mb-2'>
                                        <p className='text-2xl font-bold text-navy-700 dark:text-gray-100 lg:py-2 pt-5'>
                                            {product.title}
                                        </p>
                                        <p className='mt-2 text-sm font-medium text-gray-600 md:mt-3 text-start dark:text-gray-300'>
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between '>
                                    <div className='lg:text-4xl text-3xl p-2 font-bold dark:text-gray-100'>
                                        {product.price}
                                    </div>
                                    <Link to='/'>
                                        <Button className='hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 hover:text-gray-900 active:bg-gray-400 dark:text-gray-200 border-gray-400 text-gray-800 bg-gray-200 dark:bg-gray-700 font-medium rounded-xl capitalize text-sm px-5 py-2 text-center m-1 border-2'>
                                            Buy Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-10 flex justify-center'></section>
            <DarkMode />
            <Footer />
        </div>
    )
}

export default ProductList
