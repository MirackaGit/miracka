import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Slider from "react-slick";
// image

const OurServicesHp = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
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
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                },
            },
        ],
    };

    const services = [
        {
            name: "Branding Solutions",
            para: "A complete strategy for defining and strengthening your brand identity is provided by branding solutions. ",
            link: "",
            color: "#553185"
        },
        {
            name: "Media Solutions",
            para: "Discover the Full Potential of Your Website with Cutting-Edge Media Solutions Media buying",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Technology Solutions",
            para: "Empowering businesses with innovative and customised technology solutions for seamless growth and success.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Photography",
            para: "We believe that every moment tells a unique and beautiful story.",
            link: "",
            color: "#4C3B8B"
        },
        {
            name: "Mobile App Solutions",
            para: "Mobile app services have emerged as a key element of this transformation, making it easier to create, launch, and maintain cutting-edge and streamlined apps.",
            link: "",
            color: "#23489B"
        },
        {
            name: "Branding Solutions",
            para: "A complete strategy for defining and strengthening your brand identity is provided by branding solutions. ",
            link: "",
            color: "#553185"
        },
        {
            name: "Media Solutions",
            para: "Discover the Full Potential of Your Website with Cutting-Edge Media Solutions Media buying",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Technology Solutions",
            para: "Empowering businesses with innovative and customised technology solutions for seamless growth and success.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Photography",
            para: "We believe that every moment tells a unique and beautiful story.",
            link: "",
            color: "#00A2D0"
        },
        {
            name: "Mobile App Solutions",
            para: "Mobile app services have emerged as a key element of this transformation, making it easier to create, launch, and maintain cutting-edge and streamlined apps.",
            link: "",
            color: "#0E73B4"
        },
        {
            name: "Branding Solutions",
            para: "A complete strategy for defining and strengthening your brand identity is provided by branding solutions. ",
            link: "",
            color: "#553185"
        },
        {
            name: "Media Solutions",
            para: "Discover the Full Potential of Your Website with Cutting-Edge Media Solutions Media buying",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Technology Solutions",
            para: "Empowering businesses with innovative and customised technology solutions for seamless growth and success.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Photography",
            para: "We believe that every moment tells a unique and beautiful story.",
            link: "",
            color: "#00A2D0"
        },
        {
            name: "Mobile App Solutions",
            para: "Mobile app services have emerged as a key element of this transformation, making it easier to create, launch, and maintain cutting-edge and streamlined apps.",
            link: "",
            color: "#0E73B4"
        },
    ]

    const mobileServices = [
        {
            name: "Branding Solutions",
            para: "A complete strategy for defining and strengthening your brand identity is provided by branding solutions. ",
            link: "",
            color: "#553185"
        },
        {
            name: "Media Solutions",
            para: "Discover the Full Potential of Your Website with Cutting-Edge Media Solutions Media buying",
            link: "",
            color: "#6C0045"
        },
        {
            name: "Technology Solutions",
            para: "Empowering businesses with innovative and customised technology solutions for seamless growth and success.",
            link: "",
            color: "#6D2576"
        },
        {
            name: "Photography",
            para: "We believe that every moment tells a unique and beautiful story.",
            link: "",
            color: "#4C3B8B"
        },
        {
            name: "Mobile App Solutions",
            para: "Mobile app services have emerged as a key element of this transformation, making it easier to create, launch, and maintain cutting-edge and streamlined apps.",
            link: "",
            color: "#4C3B8B"
        },
    ]




    return (
        <div className='mt-10 md:mt-20 px-4 md:px-0'>
            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <h2 className="md:text-center">Our Services</h2>
                </div>
                <div className='hidden md:block'>
                    <Slider {...settings}>
                        {
                            services.map((service, index) => {
                                return (
                                    <div key={index} className='group'>
                                        <div className='h-[400px] text-center py-12 px-6'
                                            style={{ backgroundColor: hoveredIndex === index ? service.color : '#F4F4F4' }}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseOver={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(-1)}
                                        >
                                            <div>
                                                <h3 className='text-[#6e6e6e] group-hover:text-[#fff9fd]'>{service.name}</h3>
                                            </div>
                                            <div className='mt-6'>
                                                <p className='group-hover:text-[#fff9fd]'>{service.para}</p>
                                            </div>
                                            <Link href={"/contact-us"} className='hidden group-hover:inline-block mt-4 px-10 py-4 drop-shadow-2xl rounded-[50px] bg-[#ffffff] text-[#0e0209]' >Know More</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className='md:hidden grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 gap-4'>
                    {
                        mobileServices.map((mobileService, m) => {
                            return (
                                <div key={m} >
                                    <div>
                                        <h4 className='black-cl'>{mobileService.name}</h4>
                                    </div>
                                    <div className='mt-2'>
                                        <p className=''>{mobileService.para}</p>
                                    </div>
                                    <Link href={"/contact-us"} className='inline-block mt-4 px-8 py-2  drop-shadow-2xl rounded-[50px] bg-[#0e0209] text-[#ffffff]' >
                                        <div>
                                            <BsArrowRight className="w-[20px] h-[20px]" />
                                        </div>
                                    </Link>
                                    <hr className='mt-8 mb-4' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServicesHp
