import React from "react"
import Navbar from "./components/Navbar"
import BackgroundGradient from "./components/BackgroundGradient"
import DarkMode from "./components/DarkMode"
import Footer from "./components/Footer"
import HeroSection from "./UI/HeroSection"
function App() {
    return (
        <div className='p-0 overflow-hidden'>
            <Navbar />
            <div className='h-screen bg-gray-100 dark:bg-slate-900 flex justify-center items-center'>
                <HeroSection />
                <BackgroundGradient />
                <DarkMode />
            </div>
            <Footer />
        </div>
    )
}

export default App
