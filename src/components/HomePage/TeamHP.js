import React from 'react'
import Image from 'next/image'
// images
import founderBg from "../../asstes/homePage/founderBg.png"
import sudarshan from '../../asstes/homePage/sudarshan.jpg'

const TeamHP = () => {
    return (
        <div className='bg-[#0e0209] py-10' style={{
            backgroundImage: `url('${founderBg.src}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>
            <div className='max-w-screen-xl mx-auto mt-6 px-4 lg:px-0'>
                <div className='grid grid-cols-1 gap-2'>
                    <div className='w-[170px] mx-auto'>
                        <Image src={sudarshan} alt='founder' className='rounded-[50%] mx-auto' width={"100%"} height={"auto"} />
                    </div>
                    <div className='mt-12'>
                        <h5 className='white-cl text-center'>Sudarshan M</h5>
                        <p className='white-cl text-center'>Founder & CEO</p>
                    </div>
                </div>
            </div>
            {/* <div className='absolute top-[20%] right-0 z-10'>
                <Image src={founderBg} alt='founder' width={"100%"} height={"auto"} />
            </div> */}
        </div>
    )
}

export default TeamHP
