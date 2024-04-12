"use client"
import { Logo } from "@/public/Assets/OnlySvgFile";
import React, { useEffect, useState } from "react";

const Loader = () => {
    // const [loder, setloader] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => { setloader(false); }, 3000);
    // }, []);
    // {
    //     if (loder === true) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "hidden";
    //     }
    // }
    return (
        <>

            <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
                <div className="flex gap-3 items-center ">
                    <Logo />
                    <div className="flex gap-2">
                        <span className="sr-only">Loading...</span>
                        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Loader;