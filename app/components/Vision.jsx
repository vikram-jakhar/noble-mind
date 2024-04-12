import React from 'react'
import visionImg from '../../public/Assets/Img/Visionimg.webp'
import Image from 'next/image'
import { AiNoble, Elipse } from '@/public/Assets/OnlySvgFile'
import BTnComn from './BTnComn'

const Vision = () => {
    return (
        <>
            <div id='About' className=' container mx-auto px-3  max-lg:flex max-lg:justify-center relative overflow-hidden'>
                <div className='grid lg:grid-cols-2 gap-[24px] !py-[75px] max-sm:!py-[25px]'>
                    <div className="col-span-1">
                        <Image src={visionImg} alt='visionim' width={544} height={567} className=' rounded-tr-[50px]' />
                    </div>
                    <div className="col-span-1">
                        <p className='font-Exo pt-[16px] max-sm:pt-[0] text-[24px]  font-normal leading-[24px] max-sm:text-base flex gap-[6px] items-center'> <span><AiNoble /></span>About Us</p>
                        <h3 className=' font-Outfit font-light pt-1 pb-4 max-sm:pb-1 text-5xl max-sm:text-3xl leading-[57.6px] max-w-[555px]'>Pioneering Vision & Mission-<span className=' font-semibold'>Driven Sectoral Innovation</span></h3>
                        <p className='font-Exo font-normal text-base max-sm:text-sm text-[#4D4D4D] mb-[42px] max-sm:mb-[8px] max-w-[470px]'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                        <span ><BTnComn text='Read More' /></span>
                    </div>

                </div>
                <span className='absolute right-[-7%] max-md:right-0 bottom-[17%] max-md:bottom-0'><Elipse /></span>

            </div>

        </>
    )
}

export default Vision
