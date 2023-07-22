import Image from 'next/image'
import React from 'react'

// image
import aboutHP from "../../asstes/homePage/aboutHP.png"
import Link from 'next/link'
const AboutusHP = () => {
    return (
        <div className='bg-[#F4F4F4] pb-12'>
            <div className='w-[100%]'>
                <Image src={aboutHP} alt='about hp' width={"100%"} height={"auto"} />
            </div>
            <div>
                <div className='max-w-screen-xl md:mx-auto px-4 -mt-20'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className='w-[100%] md:w-[25%]'>
                            <h2 className="text-center" data-aos="fade-up">About us</h2>
                        </div>
                        <div className='w-[100%] md:w-[75%] grid grid-cols-1 gap-4' data-aos="fade-up">
                            <h4 data-aos="fade-up">Miracka Marketing & IT Agency offers seamless digital marketing and IT solutions</h4>
                            <p data-aos="fade-up">
                                At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client business.
                            </p>
                            <p data-aos="fade-up">
                                We think that it is obsolete to have a brand new website that does not assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.
                            </p>
                            <div data-aos="fade-up">
                                <Link href={"#"} className='inline-block px-12 py-4 drop-shadow-2xl rounded-[50px] text-[#ffffff] bg-[#0e0209]' >Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutusHP
