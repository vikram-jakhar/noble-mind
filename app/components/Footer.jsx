import { Facebook, Ficon, In, Insta, Twitter } from '@/public/Assets/OnlySvgFile'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-[black] min-h-[440px]">
                <div className=' container mx-auto px-3'>
                    <div className="grid grid-cols-5 !justify-between pt-[138px]">
                        <div className="lg:col-span-3 col-span-5  max-lg:!flex max-lg:flex-col max-lg:mb-[38px]  max-lg:items-center ">
                            <span><Ficon /></span>
                            <p className='Exo text-base font-normal text-white mt-[28px] mb-4'>Follow Us</p>
                            <div className='flex gap-[16px]'>
                                <a href='' className='w-[44px] justify-center items-center h-[44px] border-2 rounded-full border-[white] flex'>
                                    <Facebook />
                                </a>
                                <a href='' className='w-[44px] justify-center items-center h-[44px] border-2 rounded-full border-[white] flex'>
                                    <Insta />
                                </a>
                                <a href='' className='w-[44px] justify-center items-center h-[44px] border-2 rounded-full border-[white] flex'>
                                    <Twitter />
                                </a>
                                <a href='' className='w-[44px] justify-center items-center h-[44px] border-2 rounded-full border-[white] flex'>
                                    <In />
                                </a>

                            </div>

                        </div>
                        <div className="lg:col-span-1 col-span-3 flex flex-col max-lg:items-center lg:items-end">
                            <ul className='max-w-[122px]'>
                                <li className='font-Outfit text-base font-semibold text-white pb-4'>Maine</li>
                                <li><a className='font-Outfit text-base font-semibold text-[#B8B8B5]' href="">Home</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5]' href="">About Us</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5]' href="">services</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5]' href="">Why Choose Us</a></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-1 col-span-2  flex flex-col max-lg:items-center  items-end">
                            <ul className='max-w-[149px]'>
                                <li className='font-Outfit text-base font-semibold text-white pb-4'>Legal</li>
                                <li><a className='font-Outfit text-base font-semibold text-[#B8B8B5]' href="">Term & Conduction</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5] ' href="">Privacy Policy</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5] ' href="">Contact</a></li>
                                <li className='mt-[14px]'><a className='font-Outfit text-base font-semibold text-[#B8B8B5] ' href="">(629) 555-0129</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' border-t-[1px] border-t-[#B8B8B5] mt-[52px]'>
                    <p className='font-Exo font-normal text-[14px] pt-4 pb-[35px] text-[#B8B8B5] text-center'>© Copyright 2024 Noble Mind | All rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
