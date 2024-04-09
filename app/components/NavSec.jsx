"use client"
import React, { useState } from 'react'
import { Logo } from '@/public/Assets/OnlySvgFile';
import BTnComn from './BTnComn';
const NavSec = () => {
    const [first, setfirst] = useState(false);
    function setopen() {
        setfirst(!first);
        if (first === false) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }
    return (
        <div className=' container px-3 mx-auto'>
            <nav className=' flex items-center justify-between py-5 '>
                <a href="#"><Logo/></a>
                <ul className={`${first ? "right-0" : "right-[100%]"} flex  gap-6  max-[1023px]:w-full h-full fixed bg-white top-0 items-center justify-center lg:h-unset lg:static  lg:bg-transparent lg:justify-end flex-col lg:flex-row z-40 transition-all ease-linear duration-300 `}>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#Home">Home</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#About">About Us</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#Services">Services</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#Driving">Why Choose Us</a></li>
                    <li><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black text-base leading-6 font-normal' href="#Blog">Blog</a></li>
                    <li className=' lg:pr-10'><a onClick={setopen} className=' font-Exo text-[#5A594D] hover:text-black  text-base leading-6 font-normal' href="#Faq">FAQ</a></li>
                    <li> <BTnComn text="Contact Us" /></li>
                </ul>
            
                <div className='lg:hidden' onClick={setopen}>
                    {first ? (
                        <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer mt-[-30px] mr-[-10px] ">
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[31px]"></span>
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 -bottom-[11px]"></span>
                        </div>
                    ) : (
                        <div className=" flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                            <span className="bg-black  w-2/3 h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                            <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavSec