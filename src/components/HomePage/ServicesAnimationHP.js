import React from 'react'

// iamges 
import appDesign from "../../asstes/homePage/servies/appDesign.png"
import gd from "../../asstes/homePage/servies/gd.png"
import ServicesAnimationMap from './ServicesAnimationMap'

const ServicesAnimationHP = () => {
    const services = [
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Social Media",
            subName: "Management",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Graphic",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
    ]
    return (
        <div className='max-w-screen-xl md:mx-auto overflow-hidden h-[740px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <ServicesAnimationMap services={services} seriversClass={"css-f013k0"}/>
                </div>
                <div className='hidden md:block'>
                    <ServicesAnimationMap services={services} seriversClass={"css-f013k0-2"}/>
                </div>
                <div className='hidden lg:block'>
                    <ServicesAnimationMap services={services} seriversClass={"css-f013k0-3"}/>
                </div>
            </div>
        </div>
    )
}

export default ServicesAnimationHP
