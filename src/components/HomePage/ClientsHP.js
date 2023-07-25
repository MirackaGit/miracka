import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
// image
import logo1 from "../../asstes/homePage/ourclientsLogo/logo-1.png"
import logo2 from "../../asstes/homePage/ourclientsLogo/logo-2.png"
import logo3 from "../../asstes/homePage/ourclientsLogo/logo-3.png"
import logo4 from "../../asstes/homePage/ourclientsLogo/logo-4.png"
import logo5 from "../../asstes/homePage/ourclientsLogo/logo-5.png"
import logo6 from "../../asstes/homePage/ourclientsLogo/logo-6.png"
import logo7 from "../../asstes/homePage/ourclientsLogo/logo-7.png"
import logo8 from "../../asstes/homePage/ourclientsLogo/logo-8.png"
import Image from 'next/image';

const ClientsHP = () => {

    const clients = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8
    ]

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        touchMove: true,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                },
            },
        ],
    };


    return (
        <div className='max-w-screen-xl mx-auto py-12 px-4 lg:px-0'>
            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <h2 className="text-center">Our Clients</h2>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            clients.map((logo, l) => {
                                return <div key={l}>
                                    <div className='w-[110px]'>
                                        <Image src={logo} alt='our clients' width={"100%"} height={"auto"} />
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ClientsHP
