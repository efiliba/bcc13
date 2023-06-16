"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { pageLinks } from '@/services';

// import './header.scss';

// const IconText = ({ className, icon, text }) =>
//   <div className={classNames('icon-text', { [`${className}`]: className })}>
//     <Icon className={`strip__content--icon fa fa-${icon}`} />
//     <Typography className="strip__content--text" variant="subtitle1">{text}</Typography>
//   </div>;

// const HeaderStrip = () =>
//   <Toolbar className="header-strip__content">
//     <IconText className="icon-text__phone" icon="phone-alt" text="1300 711 380" />
//     <IconText icon="envelope" text="admin@bestchoicecare.com.au" />
//     <IconText className="icon-text__location" icon="map-marker-alt" text="Location, NSW" />
//     <a className="header-strip__social" target="_blank" href="https://www.facebook.com/bestchoicecare.com.au" rel="noopener noreferrer">
//       <Typography variant="subtitle1">Follow Us</Typography>
//       <Icon className="fab fa-facebook" />
//     </a>
//   </Toolbar>;

export const Header = () => {
  const [show, setShow] = useState(false);

  // const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // useEffect(() => {
  //   setSelectedTabIndex(pageLinks.findIndex(({ to }) => to === router.pathname));
  // }, [router.pathname]);

  const handleHamburgerClick = () => setShow(state => !state);

  return (
    <header className="header">
      {/* <div className="header-strip">
        <HeaderStrip />
      </div> */}
      <div className="p-4 bg-white grid grid-cols-[194px_1fr_min-content]">
        <Link className="relative h-20" href="/" passHref>
          <Image
            src="/images/best-choice-care.png"
            alt="Best Choice Care"
            fill
            priority
          />
        </Link>
        <button
          type="button"
          className="md:hidden col-start-3 text-primary hover:text-secondary focus:text-secondary focus:outline-none"
          onClick={handleHamburgerClick}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {show
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
        <div className={`${show ? 'grid' : 'hidden'} md:grid col-start-2 col-span-2 justify-self-end md:grid-flow-col items-baseline lg:items-center`}>
          {pageLinks.map(({ to, text }, index) =>
            <Link key={index} className="md:text-xs lg:text-base font-semibold text-gray-500 hover:bg-primary hover:text-white rounded p-2" href={to}>
              {text}
            </Link>
          )}
          <div className="p-2 text-secondary grid grid-cols-[max-content_max-content] items-center gap-x-5 gap-y-1">
            <svg className="w-6 h-6 row-span-2 md:row-span-1 lg:row-span-2 fill-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div className="text-xs">Call Us</div>
            <div className="md:col-span-2 lg:col-span-1 text-lg md:text-sm lg:text-lg font-bold">1300 711 380</div>
          </div>
        </div>
      </div>
    </header>
  );
};
