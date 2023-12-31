import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const ServicesAnimationMap = ({ services, seriversClass }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
    return (
        <>
            <div className='flex flex-col'>
                <ol className={`${seriversClass}`}>
                    {
                        services.map((servicAna, sa) => {
                            return (
                                <li key={sa} className='group css-vh4nhw py-4 px-2 md:px-4 my-2 md:my-6'
                                    style={{ backgroundColor: hoveredIndex === sa ? servicAna.color : '#F4F4F4' }}
                                    onMouseEnter={() => setHoveredIndex(sa)}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                >
                                    <Link href={"/contact-us"} >
                                        <div>
                                            <h4 className='text-20px md:text-28px text-[#6e6e6e] group-hover:text-[#ffffff]'>{servicAna.name}</h4>
                                        </div>
                                        <div>
                                            <h6 className='text-[#6e6e6e] group-hover:text-[#ffffff]'>{servicAna.subName}</h6>
                                        </div>
                                        <div className='w-[160px] md:w-[220px] my-4'>
                                            <Image src={servicAna.img} alt={servicAna.name} width={"auto"} height={"100%"} />
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default ServicesAnimationMap
