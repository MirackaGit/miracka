import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
// iamges
import headerLogo from "../../asstes/common/headerLogo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const quickLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Contact Us",
            link: "/contactus"
        },
    ]

    const socialmedias = [
        {
            icons: FaFacebook,
            link: "#"
        },
        {
            icons: FaLinkedinIn,
            link: "#"
        },
        {
            icons: AiFillInstagram,
            link: "#"
        },
        {
            icons: FaTwitter,
            link: "#"
        },
    ]

    return (
        <div className='bg-drak-gray py-12 h-[100%] w-[100%]'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0 gap-12'>
                <div className='w-[100%] mb-12'>
                    <Image src={headerLogo} alt='Miracka logo' width={"auto"} height={"100%"} className='w-auto md:w-[400px] mx-auto'/>
                </div>
                <hr className='my-4'/>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
                    <div className='flex justify-between md:justify-start gap-6 lg:gap-12'>
                        {
                            socialmedias.map((socialmedia, s) => {
                                return (
                                    <div key={s}>
                                        <Link href={socialmedia.link}>
                                            <div>
                                                <socialmedia.icons className='w-[24px] h-[24px] white-cl' />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center gap-6 mt-6 md:mt-0'>
                        {
                            quickLinks.map((quickLink, q) => {
                                return (
                                    <div key={q}>
                                        <Link href={quickLink.link} className='white-cl'>{quickLink.name}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='text-center md:text-right text-[14px]'>
                        <p>Copyright © {new Date().getFullYear()} Miracka.</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
