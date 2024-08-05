import React from 'react'

const CloseButton = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className="absolute right-2 top-3 text-textColor hover:text-error">
            <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="fill-current w-10" >
                <path d="M15 1.875C7.6875 1.875 1.875 7.6875 1.875 15C1.875 22.3125 7.6875 28.125 15 28.125C22.3125 28.125 28.125 22.3125 28.125 15C28.125 7.6875 22.3125 1.875 15 1.875ZM15 26.25C8.8125 26.25 3.75 21.1875 3.75 15C3.75 8.8125 8.8125 3.75 15 3.75C21.1875 3.75 26.25 8.8125 26.25 15C26.25 21.1875 21.1875 26.25 15 26.25Z" fill="inherit" />
                <path d="M20.0625 21.5625L15 16.5L9.9375 21.5625L8.4375 20.0625L13.5 15L8.4375 9.9375L9.9375 8.4375L15 13.5L20.0625 8.4375L21.5625 9.9375L16.5 15L21.5625 20.0625L20.0625 21.5625Z" fill="inherit" />
            </svg>
        </button>
    )
}

export default CloseButton