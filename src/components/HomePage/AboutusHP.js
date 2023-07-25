import Image from 'next/image'
import React from 'react'

// image
import aboutHP from "../../asstes/homePage/aboutHP.png"
import Link from 'next/link'
const AboutusHP = () => {
    return (
        <div className='bg-[#F4F4F4] pb-12'>
            <div className='hidden md:block'>
                <div className='w-[100%]'>
                    <Image src={aboutHP} alt='about hp' width={"100%"} height={"auto"} />
                </div>
            </div>
            <div>
                <div className='max-w-screen-xl mx-auto px-4 lg:px-0 md:-mt-20 pt-6 md:pt-0'>
                    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                        <div className='w-[100%] md:w-[25%]'>
                            <h2 className="md:text-center">About us</h2>
                        </div>
                        <div className='w-[100%] md:w-[75%] grid grid-cols-1 gap-4'>
                            <h4>We are always open and honest when it comes to business. As we know, foundation of a successful relationship stands on transparency</h4>
                            <p className='text-justify'>
                                Through unique digital strategies, Miracka finds inefficiencies to maximise revenue. To create your unique strategy, we evaluate the process by conducting multiple A/B testing in order to achieve the best outcome.
                            </p>
                            <p className='text-justify'>
                                Thus, we assure you in providing in- depth marketing services for every level of your business and at every pivotal point in your customers&lsquo; journey.
                                Additionally, our IT specialists assist in finding the best IT solution for your business, guaranteeing a hassle-free experience for you.
                            </p>
                            <div>
                                <Link href={"/contact-us"} className='inline-block px-4 py-2 md:px-12 md:py-3 drop-shadow-2xl rounded-[50px] text-[#ffffff] bg-[#0e0209] cursor-pointer ' >Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutusHP
