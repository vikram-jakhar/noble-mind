import React from 'react'

const BTnComn = (props) => {
    return (
        <div>
            <div>
                <button className=' bg-btn px-6 py-[14px] rounded hover:rounded-[19px] text-white font-semibold text-base leading-6 font-Outfit hover:text-black hover:bg-btn2 transition-all ease-in-out duration-500 hover:border-2 border-2 border-transparent hover:border-[#9C5CEC] '>{props.text}
                </button>
            </div>
        </div>
    )
}

export default BTnComn
