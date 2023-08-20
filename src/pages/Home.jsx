import React from "react"
import Navbar from "../components/Navbar"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import CategorySection from "../components/CategorySection"
import Carousel from "../components/Carousel"
import Faq from "../components/Faq"
const Home = () => {
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <Navbar />
            <BackgroundGradient />
            <HeroSection />
            <BackgroundGradient />
            <Carousel />
            <CategorySection />
            <DarkMode />
            <BackgroundGradient />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
