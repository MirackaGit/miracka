import React from 'react'

// iamges 
import appDesign from "../../asstes/homePage/servies/appDesign.png"
import gd from "../../asstes/homePage/servies/gd.png"
import ServicesAnimationMap from './ServicesAnimationMap'

const ServicesAnimationHP = () => {
    const services = [
        {
            name: "Graphic",
            subName: "Designing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "VFX",
            subName: "Animation",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Media",
            subName: "buying",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Strategic Media",
            subName: "Planning",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Performance",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Custom Website",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Web application",
            subName: "development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Business Portfolio",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
    ]
    const services2 = [
        {
            name: "VFX",
            subName: "Animation",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Media",
            subName: "buying",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Strategic Media",
            subName: "Planning",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Performance",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Custom Website",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Web application",
            subName: "development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Business Portfolio",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        
        {
            name: "Graphic",
            subName: "Designing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: appDesign,
            color: "#6D1D6C"
        },
    ]
    const services3 = [
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Business Portfolio",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Graphic",
            subName: "Designing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: gd,
            color: "#01A2D1"
        },
        
        {
            name: "Strategic Media",
            subName: "Planning",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Performance",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Custom Website",
            subName: "Development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "VFX",
            subName: "Animation",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Media",
            subName: "buying",
            img: appDesign,
            color: "#6D1D6C"
        },
        {
            name: "Web application",
            subName: "development",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: gd,
            color: "#01A2D1"
        },
        
    ]
    return (
        <div className='max-w-screen-xl mx-auto overflow-hidden h-[740px] px-4 lg:px-0'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                <div>
                    <ServicesAnimationMap services={services} seriversClass={"css.f013k0 css-f013k0-1"}/>
                </div>
                <div>
                    <ServicesAnimationMap services={services2} seriversClass={"css.f013k0 css-f013k0-2"}/>
                </div>
                <div className='hidden lg:block'>
                    <ServicesAnimationMap services={services3} seriversClass={"css.f013k0 css-f013k0-3"}/>
                </div>
            </div>
        </div>
    )
}

export default ServicesAnimationHP
