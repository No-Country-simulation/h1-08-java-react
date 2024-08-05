import React from 'react'

const CardContain = ({ children }) => {
    return (
        <div className="font-roboto p-6 rounded-2xl bg-light backdrop-blur-sm card-shadow border border-orange transition duration-200 ease hover:border-fucsia hover:bg-white w-[350px] max-w-11/12 text-black">
            {children}
        </div>
    )
}

export default CardContain