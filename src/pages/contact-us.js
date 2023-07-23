import ContactUsForm from '@/components/ContactUsPage/ContactUsForm';
import React from 'react';
import Image from 'next/image';

// images
import img1 from "../asstes/contactus/1.webp"
import img2 from "../asstes/contactus/2.webp"



const ContactUs = () => {
    const showImage = [
        img1, img2,
    ]
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0 pt-6 pb-12'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='w-[100%] md:w-[60%]'>
                        <div className='grid grid-cols-1 gap-4'>
                            <h3>Drop Us A Message</h3>
                            <h6>
                                We are excited to work with you soon! Please drop an email with your details & requirements to miracka@miracka.com.
                            </h6>
                            <p>You can also fill this form & we will get back in 1 business days.</p>
                        </div>
                        <div>
                            <ContactUsForm />
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[40%]'>
                        {
                            showImage.map((showImg, si) => {
                                return (
                                    <div key={si}>
                                        <Image src={showImg} alt='services' width={'auto'} height={"auto"} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
