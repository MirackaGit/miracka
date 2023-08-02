import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { BsArrowRight } from "react-icons/bs";


import Image from "next/image";
import logo from "../../asstes/homePage/ogLogo.svg"

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const ref = useRef();

    useEffect(() => {
        function handleScroll(event) {
            if (openNav && ref.current && !ref.current.contains(event.target)) {
                setOpenNav(false);
            }
        }
        document.addEventListener('mousedown', handleScroll, true);
        document.addEventListener('mouseleave', handleScroll, true);
        return () => {
            document.removeEventListener('mousedown', handleScroll, true);
            document.removeEventListener('mouseleave', handleScroll, true);
        };
    }, [openNav]);

    // const navigationLink = [
    //     {
    //         name: "Home",
    //         menu: false,
    //         linkNav: "/"
    //     },
    // ];

    // const navList = (
    //     <ul id="navLinksBar" className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    //         {
    //             navigationLink.map((navlink, nL) => {
    //                 return <div key={nL}>
    //                     <>
    //                         <Typography
    //                             as="li"
    //                             className={router.pathname == navlink.linkNav ? "hover:text-[#009FCF] text-white active-link p-1 font-medium text-[16px]" : "hover:text-[#009FCF] in-active-link p-1 font-medium text-[16px]"}
    //                         >
    //                             <Link href={navlink.linkNav} className="flex items-center hover:text-[#009FCF] text-white">
    //                                 {navlink.name}
    //                             </Link>
    //                         </Typography>
    //                     </>
    //                 </div>
    //             })
    //         }
    //     </ul>
    // );




    return (
        <>
            <div className="bg-[#000000] text-white w-[100%] z-[2000] shadow-md" style={{ position: "sticky", top: "0px", }} ref={ref}>
                <nav className="max-w-screen-xl md:mx-auto py-4 px-4">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <div className="w-[130px] md:w-[180px] box-border">
                            <Link href={"/"}>
                                <Image src={logo} alt="Mircaka" width={"auto"} height="auto" />
                            </Link>
                        </div>
                        <div className="text-center md:text-left text-white text-[12px] md:text-[14px]">
                            <Link href={"/contact-us"}
                                className=" hover:bg-[#009FCF] bg-[#ffffff] text-[#000000] hover:text-[#ffffff] cursor-pointer flex items-center px-4 md:px-12 py-2 md:py-3 rounded-[50px]">
                                Contact Us
                                <div>
                                    <BsArrowRight className="mr-[2px] w-[14px] sm:w-[20px] h-[14px] sm:h-[20px] mx-2" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}