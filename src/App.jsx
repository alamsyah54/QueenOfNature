import React from "react"
import Navbar from "./components/Navbar"
import BackgroundGradient from "./components/BackgroundGradient"
import DarkMode from "./components/DarkMode"
import Footer from "./components/Footer"
import HeroSection from "./UI/HeroSection"
function App() {
    return (
        <div className='p-0 overflow-hidden bg-slate-200 dark:bg-gray-900'>
            <BackgroundGradient className='' />
            <Navbar />
            <HeroSection />
            <DarkMode />
            <Footer />
        </div>
    )
}

export default App
