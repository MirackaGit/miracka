import React from 'react'
import Image from 'next/image'

const ServicesAnimationMap = ({ services,seriversClass }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(-1);
    return (
        <>
            <div className='flex flex-col'>
                <ol className={`${seriversClass}`}>
                    {
                        services.map((servicAna, sa) => {
                            return (
                                <li key={sa} className='group css-vh4nhw py-4 px-4'
                                    style={{ backgroundColor: hoveredIndex === sa ? servicAna.color : '#F4F4F4' }}
                                    onMouseEnter={() => setHoveredIndex(sa)}
                                    onMouseLeave={() => setHoveredIndex(-1)}
                                >
                                    <div>
                                        <h4 className='text-[#a29ea0] group-hover:text-[#ffffff]'>{servicAna.name}</h4>
                                    </div>
                                    <div>
                                        <h5 className='text-[#a29ea0] group-hover:text-[#ffffff]'>{servicAna.subName}</h5>
                                    </div>
                                    <div className='w-[100%] my-4'>
                                        <Image src={servicAna.img} alt={servicAna.name} width={"auto"} height={"100%"} />
                                    </div>
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
