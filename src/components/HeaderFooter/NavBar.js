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
import logo from "../../asstes/homePage/headerLogo.svg"

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
                <nav className="max-w-screen-xl md:mx-auto py-4">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <div className="w-[90px] sm:w-[120px] ml-4 md:ml-0 md:mr-4 box-border">
                            <Link href={"/"}>
                                <Image src={logo} alt="Mircaka" width={"auto"} height="auto" />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center mr-6 lg:mr-0">
                                {/* <div className="navLinksHidden mr-4">{navList}</div> */}
                                <div className="flex text-center md:text-left text-white text-[14px]">
                                    <div
                                        className=" hover:bg-[#009FCF] bg-[#ffffff] text-[#000000] hover:text-[#ffffff] cursor-pointer flex items-center px-12 py-3 rounded-[50px]">
                                        Contact Us
                                        <div>
                                            <BsArrowRight className="mr-[2px] w-[14px] sm:w-[20px] h-[14px] sm:h-[20px] mx-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <IconButton
                                variant="text"
                                className="mr-4 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <Collapse open={openNav} className="px-4" >
                        <div className="container mx-auto mt-8 mb-4">
                            {/* <span onClick={() => setOpenNav(!openNav)}>{navList}</span> */}
                        </div>
                    </Collapse>
                </nav>
            </div>

        </>
    );
}