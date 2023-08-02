import Head from 'next/head'
import React from 'react'

const HeaderPage = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Your Creative, Media ,Technology ,VFX Animations , Sales & Marketing Partner"
            />
            <meta
                name="keywords"
                content="Graphic Designing, Website Development, UI/UX, Wordpress Websites, Social Media Ads, Social Media Marketing, Re-Branding Solutions, Video Editing & Animations,Email Marketing, Bulk Messaging, Photography & Video Shoot, Mobile Application Solutions, ERP Solutions, Sales & Marketing"
            />
        </Head>
    )
}

export default HeaderPage
