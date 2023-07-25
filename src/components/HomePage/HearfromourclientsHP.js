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
            para: `I've been consulting with this business for about two years. The services and assistance are first-rate; they consistently supported our company and kept in close contact with me where my website was redirecting to some london company finally resolved from MIRACKA TEAM. They keep their word and finish the necessary adjustments promptly and according to priority. We appreciate your support and suggest this business for IT services.`, 
            name: "Keerti Reddy",
            place: "Marketing Head in Metropolis Builders"
        },
        {
            para:`The experience of working with Miracka  was excellent. It  was a really nice team who understood our needs well. We quickly received a logo that matched our requirements. I'm quite pleased with how our logo turned out.I wholeheartedly endorse the Team for logo designs; they will create the logo in accordance with your ideas and enthusiasm. And I really appreciate their patience when I was tweaking the logo. To contact Miracka for logo designs, there is no need to compare or second-guess yourself.Good fortune.`,
            name: "Mahesh",
            place: "Director of Manthana Restaurant"
        },
        {
            para: `Their excellent website development and digital marketing services Astound me. Choose a business that will stick by you and offer Satisfying Return on Investment to the brand so that it increases its worth. It's not only about picking someone to design websites, handle social media marketing, or perform any other function. One of the top web development and digital marketing firms in India is called WebShark. a firm that supports you in all of your branding and business needs. "I heartily and sincerely endorse Miracka.`, 
            name: "Kumar Kamble",
            place: "Director of City Prime Security"
        },
        {
            para: `I want to thank Web Designer Express for my website. We have been doing business for over 10 years and my website has been doing great. Also thanks for optimising our "google my business" account you did a great job as I was completely lost on what to do. I would recommend to any one that needs a website created to look no further. Miracka Teammates are very knowledgeable; they seem to know every question I have. Thanks again guys!`,
            name: "Sunil",
            place: "Director of Paws Paradise"
        },
        {
            para: `I've been consulting with this business for about two years. The services and assistance are first-rate; they consistently supported our company and kept in close contact with me where my website was redirecting to some london company finally resolved from MIRACKA TEAM. They keep their word and finish the necessary adjustments promptly and according to priority. We appreciate your support and suggest this business for IT services.`, 
            name: "Keerti Reddy",
            place: "Marketing Head in Metropolis Builders"
        },
        {
            para:`The experience of working with Miracka  was excellent. It  was a really nice team who understood our needs well. We quickly received a logo that matched our requirements. I'm quite pleased with how our logo turned out.I wholeheartedly endorse the Team for logo designs; they will create the logo in accordance with your ideas and enthusiasm. And I really appreciate their patience when I was tweaking the logo. To contact Miracka for logo designs, there is no need to compare or second-guess yourself.Good fortune.`,
            name: "Mahesh",
            place: "Director of Manthana Restaurant"
        },
        {
            para: `Their excellent website development and digital marketing services Astound me. Choose a business that will stick by you and offer Satisfying Return on Investment to the brand so that it increases its worth. It's not only about picking someone to design websites, handle social media marketing, or perform any other function. One of the top web development and digital marketing firms in India is called WebShark. a firm that supports you in all of your branding and business needs. "I heartily and sincerely endorse Miracka.`, 
            name: "Kumar Kamble",
            place: "Director of City Prime Security"
        },
        {
            para: `I want to thank Web Designer Express for my website. We have been doing business for over 10 years and my website has been doing great. Also thanks for optimising our "google my business" account you did a great job as I was completely lost on what to do. I would recommend to any one that needs a website created to look no further. Miracka Teammates are very knowledgeable; they seem to know every question I have. Thanks again guys!`,
            name: "Sunil",
            place: "Director of Paws Paradise"
        },
        {
            para: `I've been consulting with this business for about two years. The services and assistance are first-rate; they consistently supported our company and kept in close contact with me where my website was redirecting to some london company finally resolved from MIRACKA TEAM. They keep their word and finish the necessary adjustments promptly and according to priority. We appreciate your support and suggest this business for IT services.`, 
            name: "Keerti Reddy",
            place: "Marketing Head in Metropolis Builders"
        },
        {
            para:`The experience of working with Miracka  was excellent. It  was a really nice team who understood our needs well. We quickly received a logo that matched our requirements. I'm quite pleased with how our logo turned out.I wholeheartedly endorse the Team for logo designs; they will create the logo in accordance with your ideas and enthusiasm. And I really appreciate their patience when I was tweaking the logo. To contact Miracka for logo designs, there is no need to compare or second-guess yourself.Good fortune.`,
            name: "Mahesh",
            place: "Director of Manthana Restaurant"
        },
        {
            para: `Their excellent website development and digital marketing services Astound me. Choose a business that will stick by you and offer Satisfying Return on Investment to the brand so that it increases its worth. It's not only about picking someone to design websites, handle social media marketing, or perform any other function. One of the top web development and digital marketing firms in India is called WebShark. a firm that supports you in all of your branding and business needs. "I heartily and sincerely endorse Miracka.`, 
            name: "Kumar Kamble",
            place: "Director of City Prime Security"
        },
        {
            para: `I want to thank Web Designer Express for my website. We have been doing business for over 10 years and my website has been doing great. Also thanks for optimising our "google my business" account you did a great job as I was completely lost on what to do. I would recommend to any one that needs a website created to look no further. Miracka Teammates are very knowledgeable; they seem to know every question I have. Thanks again guys!`,
            name: "Sunil",
            place: "Director of Paws Paradise"
        },
        {
            para: `I've been consulting with this business for about two years. The services and assistance are first-rate; they consistently supported our company and kept in close contact with me where my website was redirecting to some london company finally resolved from MIRACKA TEAM. They keep their word and finish the necessary adjustments promptly and according to priority. We appreciate your support and suggest this business for IT services.`, 
            name: "Keerti Reddy",
            place: "Marketing Head in Metropolis Builders"
        },
        {
            para:`The experience of working with Miracka  was excellent. It  was a really nice team who understood our needs well. We quickly received a logo that matched our requirements. I'm quite pleased with how our logo turned out.I wholeheartedly endorse the Team for logo designs; they will create the logo in accordance with your ideas and enthusiasm. And I really appreciate their patience when I was tweaking the logo. To contact Miracka for logo designs, there is no need to compare or second-guess yourself.Good fortune.`,
            name: "Mahesh",
            place: "Director of Manthana Restaurant"
        },
        {
            para: `Their excellent website development and digital marketing services Astound me. Choose a business that will stick by you and offer Satisfying Return on Investment to the brand so that it increases its worth. It's not only about picking someone to design websites, handle social media marketing, or perform any other function. One of the top web development and digital marketing firms in India is called WebShark. a firm that supports you in all of your branding and business needs. "I heartily and sincerely endorse Miracka.`, 
            name: "Kumar Kamble",
            place: "Director of City Prime Security"
        },
        {
            para: `I want to thank Web Designer Express for my website. We have been doing business for over 10 years and my website has been doing great. Also thanks for optimising our "google my business" account you did a great job as I was completely lost on what to do. I would recommend to any one that needs a website created to look no further. Miracka Teammates are very knowledgeable; they seem to know every question I have. Thanks again guys!`,
            name: "Sunil",
            place: "Director of Paws Paradise"
        },
        
    ]
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-4 lg:px-0 pt-8 pb-14'>
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
                                            <div className='md:flex md:items-center gap-2'>
                                                <h6>{review.name}</h6>
                                                <p>{review.place}</p>
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
