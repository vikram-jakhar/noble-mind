import { AiNoble, Elipse } from '@/public/Assets/OnlySvgFile'
import React from 'react'
const HeroSec = () => {
    return (
        <>
            <div id='Home' className='bg-[url(../public/Assets/Img/heroimg.png)] min-h-[720px] max-sm:min-h-[420px] bg-cover bg-center  bg-no-repeat flex items-center !mb-[75px] max-sm:!mb-[25px] max-md:mt-[-78px] md:mt-[-100px] 2xl:mt-[50px] '>
                <div className=' container mx-auto ps-3 relative'>
                    <div className=''>
                        <p className='font-Exo text-[16px] text-[#131200] flex items-center gap-[6px] font-normal leading-[24px]'><span> <AiNoble /></span> AI With Noble Mind</p>
                        <h1 className='font-Outfit sm:max-w-[599px] font-light text-[64px] max-sm:text-3xl max-sm:text-center sm:leading-[76.8px] text-[black] sm:d-block '>Inspiring Innovation, Elevating Solutions – <span className='font-semibold text-[48px] max-sm:text-2xl'>Noble Mind"</span></h1>
                        <p className='font-Exo font-normal text-[16px] max-sm:text-sm leading-[24px] text-[#4D4D4D] max-w-[570px]'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
                    </div>
                    <span className='absolute bottom-[-70%] max-md:bottom-[-50%] left-[-6%] max-md:left-5'><Elipse /></span>
                </div>
            </div >
        </>
    )
}

export default HeroSec
