import Image from 'next/image'
import React from 'react'

// image 
import sliderlogo from '../../asstes/homePage/sliderLogo.png'
const HeroBannerHP = () => {
    return (
        <div className='h-auto'>
            <div className='w-[100%] bg-[#000000] lg:rounded-b-[130px] xl:rounded-b-[180px]'>
                <div className='max-w-screen-xl mx-auto py-14 xl:py-24 2xl:py-28'>
                    <div className='flex flex-col justify-center px-4'>
                        <div>
                            <h1 className='white-cl text-[36px] md:text-[42px] xl:text-[52px] 2xl:text-[60px] w-[100%]'>CREATING A PATH OF SUCCESS FOR YOUR BUSINESS</h1>
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
