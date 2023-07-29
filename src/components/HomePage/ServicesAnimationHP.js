import React from 'react'

// iamges 
import appDesign from "../../asstes/homePage/servies/appDesign.png"
import gd from "../../asstes/homePage/servies/gd.png"
import Animations from "../../asstes/homePage/servies/Animations.png"
import App from "../../asstes/homePage/servies/App.png"
import dynamic from "../../asstes/homePage/servies/dynamic.png"
import Business from "../../asstes/homePage/servies/Business.png"
import Content from "../../asstes/homePage/servies/Content.png"
import contentMarketing from "../../asstes/homePage/servies/contentMarketing.png"
import Ecommerce from "../../asstes/homePage/servies/E-commerce.png"
import Marketing from "../../asstes/homePage/servies/Marketing.png"
import Mobile from "../../asstes/homePage/servies/Mobile.png"
import Photography from "../../asstes/homePage/servies/Photography.png"
import Revamping from "../../asstes/homePage/servies/Revamping.png"
import seo from "../../asstes/homePage/servies/seo.png"
import Shopify from "../../asstes/homePage/servies/Shopify.png"
import UIUX from "../../asstes/homePage/servies/UIUX.png"
import Website from "../../asstes/homePage/servies/Website.png"
import WordPress from "../../asstes/homePage/servies/WordPress.png"
import ServicesAnimationMap from './ServicesAnimationMap'

const ServicesAnimationHP = () => {
    const services = [
        {
            name: "Graphic",
            subName: "Designing",
            img: gd,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: appDesign,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: Content,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: seo,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: Animations,
            color: "#6D1D6C"
        },
        {
            name: "VFX",
            subName: "Animation",
            img: Animations,
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
            img: seo,
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
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: dynamic,
            color: "#6D1D6C"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: UIUX,
            color: "#01A2D1"
        },
        {
            name: "Web application",
            subName: "development",
            img: Website,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: WordPress,
            color: "#01A2D1"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: Shopify,
            color: "#01A2D1"
        },
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: contentMarketing,
            color: "#01A2D1"
        },
        {
            name: "Business Portfolio",
            subName: "Website",
            img: Business,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: App,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: Mobile,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: Marketing,
            color: "#01A2D1"
        },
    ]
    const services2 = [
        {
            name: "VFX",
            subName: "Animation",
            img: Animations,
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
            img: seo,
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
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: dynamic,
            color: "#6D1D6C"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: UIUX,
            color: "#01A2D1"
        },
        {
            name: "Web application",
            subName: "development",
            img: Website,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: WordPress,
            color: "#01A2D1"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: Shopify,
            color: "#01A2D1"
        },
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: contentMarketing,
            color: "#01A2D1"
        },
        {
            name: "Business Portfolio",
            subName: "Website",
            img: Business,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: App,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: Mobile,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: Marketing,
            color: "#01A2D1"
        },
        
        {
            name: "Graphic",
            subName: "Designing",
            img: gd,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: appDesign,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: Content,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: seo,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: Animations,
            color: "#6D1D6C"
        },
    ]
    const services3 = [
        
        {
            name: "Business Portfolio",
            subName: "Website",
            img: Business,
            color: "#01A2D1"
        },
        {
            name: "Product",
            subName: "Photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "photoshoot",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "Concept",
            subName: "photography",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Model",
            subName: "Photoshoot",
            img: Photography,
            color: "#01A2D1"
        },
        {
            name: "Mobile App",
            subName: "Solutions",
            img: App,
            color: "#01A2D1"
        },
        {
            name: "Flutter App",
            subName: "Development",
            img: Mobile,
            color: "#01A2D1"
        },
        {
            name: "Web App",
            subName: "Development",
            img: Marketing,
            color: "#01A2D1"
        },
        {
            name: "Revamping",
            subName: "Website",
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "UI//UX",
            subName: "Design",
            img: UIUX,
            color: "#01A2D1"
        },
        {
            name: "Web application",
            subName: "development",
            img: Website,
            color: "#01A2D1"
        },
        {
            name: "E-commerce",
            subName: "Website",
            img: Ecommerce,
            color: "#01A2D1"
        },
        {
            name: "WordPress",
            subName: "Websites",
            img: WordPress,
            color: "#01A2D1"
        },
        
        {
            name: "VFX",
            subName: "Animation",
            img: Animations,
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
            img: seo,
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
            img: Revamping,
            color: "#01A2D1"
        },
        {
            name: "Static and dynamic",
            subName: "websites",
            img: dynamic,
            color: "#6D1D6C"
        },
        {
            name: "Shopify",
            subName: "Websites",
            img: Shopify,
            color: "#01A2D1"
        },
        {
            name: "Graphic",
            subName: "Designing",
            img: gd,
            color: "#6D1D6C"
        },
        {
            name: "Social media",
            subName: "management",
            img: appDesign,
            color: "#01A2D1"
        },
        {
            name: "Content",
            subName: "Marketing",
            img: Content,
            color: "#6D1D6C"
        },
        {
            name: "Google, Facebook,",
            subName: "Instagram ads",
            img: seo,
            color: "#01A2D1"
        },
        {
            name: "Video Editing",
            subName: "& Animations",
            img: Animations,
            color: "#6D1D6C"
        },
        {
            name: "Multi-vendor",
            subName: "Websites",
            img: contentMarketing,
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
