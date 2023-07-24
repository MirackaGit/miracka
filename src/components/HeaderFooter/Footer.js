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
        <div className='bg-drak-gray pb-12 pt-24 h-[100%] w-[100%]'>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0 gap-6'>
                <div className='w-[100%]'>
                    <Image src={headerLogo} alt='Miracka logo' width={"auto"} height={"100%"}/>
                </div>
                <hr className='my-4'/>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
                    <div className='flex  md:justify-start gap-12'>
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
                    <div className='flex md:justify-center gap-6 my-4 md:my-0'>
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
                    <div className='text-left md:text-right text-[14px]'>
                        <p>Copyright © {new Date().getFullYear()} Miracka.</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
