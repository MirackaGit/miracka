import Image from 'next/image'
import React from 'react'

// image 
import sliderlogo from '../../asstes/homePage/sliderLogo.png'
const HeroBannerHP = () => {
    return (
        <div className='h-auto md:h-[80vh]'>
            <div className='relative'>
                <div className='absolute top-0 right-0 w-[100%] bg-[#000000] rounded-b-[200px]'>
                    <div className='max-w-screen-xl md:mx-auto py-32'>
                        <div className='flex flex-col justify-center'>
                            <div>
                                <h1 className='white-cl text-[70px] w-[100%]'>CREATING A PATH OF SUCCESS FOR YOUR BUSINESS</h1>
                            </div>
                            <div className='mt-6'>
                                <p className='white-cl md:text-[24px] w-[90%]'>Your  Creative, Media ,Technology ,VFX Animations , Sales  & Marketing Partner</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[91%] mx-auto wrapper mb-8">
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
        </div>
    )
}

export default HeroBannerHP
