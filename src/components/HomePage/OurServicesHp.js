import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
// image

const OurServicesHp = () => {

    const services = [
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#553185"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#4C3B8B"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#23489B"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#0E73B4"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#00A2D0"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#553185"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#4C3B8B"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#23489B"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#0E73B4"
        },
        {
            name: "Teach Solution",
            para: "At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company.",
            link: "",
            color: "#00A2D0"
        },
    ]

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                },
            },
        ],
    };


    return (
        <div className='mt-20' data-aos="fade-up">
            <div className='grid grid-cols-1 gap-4' data-aos="fade-up">
                <div data-aos="fade-up">
                    <h2 className="text-center" data-aos="fade-up">Our Services</h2>
                </div>
                <div data-aos="fade-up">
                    <Slider {...settings}>
                        {
                            services.map((service, s) => {
                                return (
                                    <div key={s} className='group'>
                                        <div className={`h-auto md:h-[400px] text-center py-12 bg-[#F4F4F4] group-hover:bg-[${service.color}]`} >
                                            <div>
                                                <h3 className='text-[#a29ea0] group-hover:text-[#fff9fd]'>{service.name}</h3>
                                            </div>
                                            <div className='mt-6'>
                                                <p className='text-[#a29ea0] group-hover:text-[#fff9fd]'>{service.para}</p>
                                            </div>
                                            <Link href={service.link} className='hidden group-hover:inline-block mt-4 px-10 py-4 drop-shadow-2xl rounded-[50px] bg-[#ffffff] text-[#0e0209]' >Know More</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default OurServicesHp