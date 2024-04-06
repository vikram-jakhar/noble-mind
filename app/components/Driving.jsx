"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiNoble, Elipse } from '@/public/Assets/OnlySvgFile';
import Image from 'next/image';
import Meeting from "../../public/Assets/Img/Meeting.webp"
const ChooseUs = () => {
    const Items = [
        { id: 1, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 2, title: 'Workplace Harmony', para: 'Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.' },
        { id: 3, title: 'Ethical Leadership ', para: 'Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.' },
        { id: 4, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
    ]
    return (
        <div id='Services' className="!mt-[75px] relative">
            <div className=" container  mx-auto px-3 flex flex-col items-center justify-center overflow-hidden ">
                <p className='font-Exo font-normal text-base flex items-center gap-[4px]'><AiNoble /> Why Choose Us</p>
                <h2 className="mt-1 h2 md:mt-2 max-w-[521px] text-center text-5xl max-sm:text-3xl sm:leading-[57px]">Driving Innovation & <span className='font-semibold'>Transforming Industries</span></h2>
                <div className='flex flex-col w-full mt-[52px]'>
                    <Swiper spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        grabCursor={true}
                        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                        loop={true}
                        breakpoints={{
                            567: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}
                        className='w-full '>
                        {
                            Items.map((items, index) => (
                                <SwiperSlide key={index} className='!flex justify-center'>
                                    <div className={`border border-[#EEDDFB] rounded-xl p-[18px] max-w-[364px] w-full min-h-[208px] overflow-auto`}>
                                        <span className='border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9'>{items.id}</span>
                                        <p className='mt-3 text-xl font-normal font-Outfit text-[#131200]'>{items.title}</p>
                                        <p className='mt-1 pTag'>{items.para}</p>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination"><span className='swiper-pagination-bullet'></span></div>
                </div>
                <Image src={Meeting} height={527} width={1140} className='w-full sm:mt-[31px] mt-4' />
                <span className='absolute top-[8%] max-md:top-[14%] left-0 max-md:left-6 z-50'> <Elipse /></span>
                <span className='absolute bottom-[3%] max-md:bottom-[-18%] right-0 z-50'> <Elipse /></span>
            </div>
        </div>
    )
}

export default ChooseUs