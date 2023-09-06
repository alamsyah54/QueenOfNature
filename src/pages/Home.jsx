import React from "react"
import Navbar from "../components/Navbar"
import Nav from "../components/Nav"
import BackgroundGradient from "../components/BackgroundGradient"
import DarkMode from "../components/DarkMode"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import CategorySection from "../components/CategorySection"
import Faq from "../components/Faq"
const Home = () => {
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <Nav />
            <BackgroundGradient />
            <HeroSection />
            <BackgroundGradient />
            <CategorySection />
            <BackgroundGradient />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
