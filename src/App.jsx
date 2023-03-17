import React from "react"
import Navbar from "./components/Navbar"
import BackgroundGradient from "./components/BackgroundGradient"
import DarkMode from "./components/DarkMode"
import Footer from "./components/Footer"
function App() {
    return (
        <div className='p-0 overflow-hidden'>
            <Navbar />
            <BackgroundGradient />
            <div className='h-screen bg-gray-100 dark:bg-slate-900 flex justify-center items-center'>
                <DarkMode />
            </div>
            <Footer />
        </div>
    )
}

export default App
