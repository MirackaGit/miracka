import React from 'react';
// css file
import '@/styles/globals.css'
// taliwind
import { ThemeProvider } from "@material-tailwind/react";

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import NavBar from '@/components/HeaderFooter/NavBar';
import Footer from '@/components/HeaderFooter/Footer';
import HeaderMiracka from './HeaderMiracka';

import logo from "../asstes/common/favicon.png"
import Image from 'next/image';
import Link from 'next/link';
export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <ThemeProvider>
        <HeaderMiracka />
        <div className='z-[99999] fixed right-3 bottom-3 md:right-5 md:bottom-5' >
          <Link href={"/"}>
            <div className='w-[35px] h-[35px] md:w-[50px] md:h-[50px]'>
              <Image src={logo} alt='Miracka logo' width={"auto"} height={"auto"} />
            </div>
          </Link>
        </div>
        <NavBar />
        <div className='bg-[#ffffff] z-[99] rounded-b-[25px] md:rounded-b-[50px]'>
          <Component {...pageProps} />
        </div>
        <div className=''>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}
