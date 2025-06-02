'use client';
import { Cutive_Mono, Abril_Fatface, Calistoga } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Alfa_Slab_One, Dancing_Script, Shadows_Into_Light, Jacquard_12_Charted, Orbitron } from 'next/font/google';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import useStore from '@/utils/store';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { MdOutlineCameraAlt } from 'react-icons/md';
import JoinUsModal from '@/components/secretPlaylistModal';
import { IoIosMusicalNotes } from 'react-icons/io';
import RandomCursor from '@/components/RandomCursor';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import ViewProductModal from '@/components/ViewProductModal';
import Script from 'next/script';
import Sidebar from '@/components/MobileSidebar';
import RedditPixel from '@/components/RedditPixel';
// import ZohoAuth from '@/components/ZohoAuth';

export const gazpacho_black = localFont({
  src: '../public/gazpacho_black.ttf',
});

const inter = Cutive_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export const alfa = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
});

export const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
});

export const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export const shadows = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
});

export const calistoga = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
});

export const jacquard = Jacquard_12_Charted({
  subsets: ['latin'],
  weight: ['400'],
});

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400'],
});

let title = "DOLE'S MUSIC";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { showModal, setShowModal, showSongsModal } = useStore();

  useEffect(() => {
    if (showModal) {
      if (pathname != '/exclusive') {
        useStore.setState({ showModal: false });
      }
    }
  }, [pathname]);

  return (
    <html lang='en'>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content="Dole's Music" />
      <meta
        name='keywords'
        content="Dole's Music, Doleshwar Raj, Doleshwar, Raj, Atrangi Funkaar, Atrangi, Funkaar, Apple Music, Spotify, Doleshwar Apple,Doleshwar Raj Apple Music, Doleshwar Raj Spotify, Doleshwar Raj Music, Doleshwar Raj Songs, Doleshwar Raj Albums, Doleshwar Raj Musician, Doleshwar Raj Music, Doleshwar Raj Musician, MAMA Beats, SSD, Jiya jaye na, Jiya, SSD,Shaunak"
      />
      <title>{"Dole's Music"}</title>
      <head>a2_gyk6ih5ganfe</head>
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <body
        className={`${abril.className} w-screen flex flex-col  relative bg-black/95 ${
          showModal || showSongsModal.open ? 'overflow-hidden' : ''
        }`}
      >
        {/* <ZohoAuth> */}
        {pathname == '/' ? (
          <div className='bg-animation z-0'>
            <div id='stars3'></div>
            <div id='stars4'></div>
          </div>
        ) : null}

        {/* <div
            ref={cursorRef}
            style={{ zIndex: 100, pointerEvents: "none" }}
            className={`hidden lg:flex cursor-alt absolute  ${
              currentPointer != ""
                ? "border-[1px] border-white bg-white h-12 w-12  "
                : " border-[1px] border-white  h-12 w-12"
            }   flex justify-center items-center rounded-full -translate-x-1/2 -translate-y-1/2 `}
          >
            {currentPointer == "a" ? (
              <MdOutlineArrowOutward color="black" className="text-xl" />
            ) : currentPointer == "i" ? (
              <MdOutlineCameraAlt color="black" className="text-xl" />
            ) : (
              <RandomCursor />
            )}
          </div> */}
        <div className=' hidden md:block fixed top-0 left-0 h-screen w-screen z-0'>
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + '/bgimg.webp'}
            unoptimized={false}
            loading='eager'
            layout='fill'
            alt='bg image'
            className=' opacity-20'
          />
        </div>
        <div className='block md:hidden fixed top-0 left-0 h-screen w-screen z-0'>
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + '/dolls3.jpeg'}
            unoptimized={false}
            layout='fill'
            loading='eager'
            objectFit={'cover'}
            objectPosition={'bottom'}
            alt='bg image'
            className=' opacity-20'
          />
        </div>
        <Navbar />
        <div className='h-full max-w-screen w-full z-10'>{children}</div>
        <Footer />
        <JoinUsModal />
        <ViewProductModal />
        <Sidebar />
        {/* Facebook pixel */}
        <Script
          id='facebook-pixel'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1561896404682590');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=1561896404682590&ev=PageView&noscript=1`}
            alt='Facebook Pixel'
          />
        </noscript>
        {/* </ZohoAuth> */}

        {/* Reddit Pixel - Conditional based on URL params */}
        <RedditPixel />
      </body>
    </html>
  );
}
