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


export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
