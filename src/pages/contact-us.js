import ContactUsForm from '@/components/ContactUsPage/ContactUsForm';
import React from 'react';
import Image from 'next/image';

// images
import img1 from "../asstes/contactus/img1.png"
import img2 from "../asstes/contactus/img2.png"

import pin from "../asstes/contactus/pin.png"

import { BsFillEnvelopeAtFill, BsFillTelephoneInboundFill } from 'react-icons/bs';
import Link from 'next/link';
import HeaderPage from '@/components/HeaderFooter/HeaderPage';



const ContactUs = () => {
    const showImage = [
        {
            link: "https://pawsparadise.in/",
            img: img1
        },
        {
            link: "https://cityprime.in/",
            img: img2,
        }
    ]
    return (
        <>
            <HeaderPage title={"contact us"} />
            <div>
                <div className='max-w-screen-xl mx-auto px-4 lg:px-0 pt-6 pb-12'>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='w-[100%] md:w-[60%]'>
                            <div className='grid grid-cols-1 gap-4'>
                                <h3>Have a Project in Mind?</h3>
                                <h6 className='md:w-[60%]'>
                                    Please fill in the form we will get back to you within 1 business days
                                </h6>
                            </div>
                            <div>
                                <ContactUsForm />
                            </div>
                            <div className='grid grid-cols-1 gap-4 mt-12'>
                                <h3>Contact Us</h3>
                                <h6 className='flex items-center'><span className='mr-4'><BsFillEnvelopeAtFill /></span>miracka@miracka.com</h6>
                                <h6 className='flex items-center'><span className='mr-4'><BsFillTelephoneInboundFill /></span>89044 16903</h6>
                                <div className='flex items-center'>
                                    <div className='mr-4 w-[42px]'><Image src={pin} alt='location' width={'auto'} height={"auto"} /></div>
                                    <h6 >25/32, Devarachikkanahalli Main Road, Hobli, Nanjundaiah Layout, Begur, Bengaluru, Karnataka 560068</h6>
                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-4 w-[28px]'><Image src={pin} alt='location' width={'auto'} height={"auto"} /></div>
                                    <h6 >Mugaluru, Sarjapura hobli, Chikkatirupathi Road, Bangalore - 562125</h6>
                                </div>

                            </div>
                        </div>
                        <div className='w-[100%] md:w-[40%]'>
                            {
                                showImage.map((showImg, si) => {
                                    return (
                                        <div key={si} className='my-8'>
                                            <Link href={showImg.link} target='_blank'>
                                                <Image src={showImg.img} alt='services' width={'auto'} height={"auto"} />
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
