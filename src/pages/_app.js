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


export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <ThemeProvider>
        <NavBar />
        <div className='bg-[#ffffff] z-10 rounded-b-[25px] md:rounded-b-[50px]'>
          <Component {...pageProps} />
        </div>
        <div className='sticky bottom-0 -z-10'>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}
