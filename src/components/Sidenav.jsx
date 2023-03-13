import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
const Sidenav = () => {
    return (
        <div>
            <AiOutlineMenu
                onClick={handelNav}
                className='absolute top-4 right-4 z-[666] md:hidden text-red-600'
            />
        </div>
    )
}

export default Sidenav
