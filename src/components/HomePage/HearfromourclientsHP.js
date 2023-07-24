import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";

// image
import reviewbg from "../../asstes/homePage/reviewBg.png"

const HearfromourclientsHP = () => {

    const settings = {
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: true,
        arrows: false,
        touchMove: true,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        dots: false,
    };

    const reviews = [
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
        {
            para: `At Miracka, we believe in providing peerless creative solutions in order to assist each client flourish in their business. As a digital marketing company, we make it a priority to recognise the objectives of each client's business. 
            We think that it is obsolete to have a brand new website that doesn't assist you in achieving your objectives. Hence, we create our business objectives keeping this in mind.`,
            name: "Vikram",
            place: "Bangalore"
        },
    ]
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0 py-6'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <div className='w-[100%] md:w-[25%]'>
                        <h2 className="md:text-center">Hear from our clients</h2>
                    </div>
                    <div className='w-[100%] md:w-[75%] grid grid-cols-1 gap-4'>
                        <div className='ml-2 md:ml-6 w-[40px] md:w-[60px]'>
                            <Image src={reviewbg} alt='review' width={"100%"} height={"auto"} />
                        </div>
                        <Slider {...settings}>
                            {
                                reviews.map((review, r) => {
                                    return (
                                        <div key={r} className='px-2 md:px-6'>
                                            <div>
                                                <p className='text-justify'>{review.para}</p>
                                            </div>
                                            <hr className='my-4'/>
                                            <div className='flex items-center gap-2'>
                                                <h6>{review.name}</h6>
                                                <p>from {review.place}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HearfromourclientsHP
