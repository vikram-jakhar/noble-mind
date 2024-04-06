import { Elipse } from "@/public/Assets/OnlySvgFile";
import React from "react";

const Newsletter = () => {
    return (
        <div className="container mx-auto px-3 translate-y-20 relative md:mt-[75px] max-md:mt-[25px] ">
            <div className="  rounded-[20px] bg-[url(../public/Assets/Img/Newsletter.webp)] bg-no-repeat bg-center px-3 bg-cover h-[318px] max-sm:h-[250px]  flex flex-col justify-center">
                <h2 className="font-light lg:text-5xl text-3xl text-center lg:leading-[57px] text-white">
                    Subscribe to our <span className="font-semibold">Newsletter!</span>
                </h2>
                <p className="text-center text-white lg:text-base text-[14px] font-normal font-Exo pb-9 max-sm:pb-3 pt-2">
                    Be the first to get exclusive offers and the latest news.
                </p>
                <div className="mx-auto bg-[#FFFFFF0D] backdrop-blur-[30px] max-w-[448px] max-sm:max-w-[250px] max-sm:flex max-sm:flex-col max-lg:items-center sm:w-full border border-[#A37FE0] rounded-[6px] py-[10px] pr-[10px] max-sm:pr-[1px] max-sm:pl-[1px] pl-6 flex justify-between">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-transparent max-sm:text-center placeholder:text-white placeholder:font-semibold placeholder:text-base placeholder:font-Outfit focus:outline-none border-none text-white font-semibold font-Outfit text-base"
                        placeholder="Enter your email"
                    />
                    <button className="py-[14px] max-sm:mt-3 px-6 max-sm:px-1 max-sm:max-w-[100px] max-lg:flex max-sm:py-[8px] border hover:rounded-[19px] transition-all ease-in-out duration-500 border-white font-Outfit font-semibold text-base rounded text-white hover:bg-white hover:text-black">
                        Subscribe
                    </button>
                </div>
            </div>
            <span className="absolute top-[-35%] left-[-6%] max-md:left-5"><Elipse/></span>
        </div>
    );
};

export default Newsletter;