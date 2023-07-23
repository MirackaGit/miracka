import Image from 'next/image'
import React from 'react'

// image 
import sliderlogo from '../../asstes/homePage/sliderLogo.png'
const HeroBannerHP = () => {
    return (
        <div className='h-auto md:h-[85vh]'>
            <div className='w-[100%] bg-[#000000] lg:rounded-b-[130px] xl:rounded-b-[180px]'>
                <div className='max-w-screen-xl mx-auto py-14 md:py-24 xl:py-32'>
                    <div className='flex flex-col justify-center px-4 lg:px-0'>
                        <div>
                            <h1 className='white-cl text-[36px] sm:text-[42px] md:text-[52px] xl:text-[70px] w-[100%]'>CREATING A PATH OF SUCCESS FOR YOUR BUSINESS</h1>
                        </div>
                        <div className='mt-6'>
                            <p className='white-cl lg:text-[24px] xl:w-[90%]'>Your  Creative, Media ,Technology ,VFX Animations , Sales  & Marketing Partner</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[92%] mx-auto wrapper pb-8">
                    <div className="marquee">
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                        <div className='flex items-center'>
                            <p>We welcome change, transform, and conquer it.</p>
                            <div><Image src={sliderlogo} alt='log' width={"auto"} height={"auto"} className='mx-2' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerHP
