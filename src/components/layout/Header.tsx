"use client";

import { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Envelope, FaceBook, Location } from '@/components/icons';

import { navigationLinks } from '@/services';

interface IconTextProps {
  icon: ReactNode;
  text: string;
}

const IconText = ({ icon, text }: IconTextProps) =>
  <div className="grid grid-cols-[max-content_max-content]">
    {icon}
    <div className="text-sm text-text">{text}</div>
  </div>;

const HeaderStrip = () =>
  <div className="max-w-screen-xl mx-auto p-3 grid grid-cols-[max-content_max-content_1fr] gap-x-5">
    <IconText icon={<Envelope />} text="admin@bestchoicecare.com.au" />
    <IconText icon={<Location />} text="Location, NSW" />
    <a className="hidden sm:grid grid-cols-[max-content_max-content] justify-self-end" target="_blank" href="https://www.facebook.com/bestchoicecare.com.au" rel="noopener noreferrer">
      <div className="text-sm text-text">Follow Us</div>
      <FaceBook />
    </a>
  </div>;

export const Header = () => {
  const pathname = usePathname();

  const [show, setShow] = useState(false);

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setSelectedTabIndex(navigationLinks.findIndex(({ to }) => to === pathname));
  }, [pathname]);

  const handleHamburgerClick = () => setShow(state => !state);

  return (
    <header>
      <HeaderStrip />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-3 py-4 grid grid-cols-[194px_1fr_min-content]">
          <Link href="/" passHref>
            <picture>
              <source srcSet="/images/best-choice-care.png, /images/best-choice-care-2x.png 2x" type="image/png" />
              <img
                src="/images/best-choice-care.png"
                alt="Best Choice Care Logo"
                fetchPriority="high"
              />
            </picture>
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
            {navigationLinks.map(({ to, text }, index) =>
              <Link
                key={index}
                className={`p-2 md:text-xs lg:text-base font-semibold hover:bg-primary hover:text-white rounded ${index === selectedTabIndex ? 'text-secondary drop-shadow' : 'text-gray-500'}`}
                href={to}
                onClick={handleHamburgerClick}
              >
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
      </div>
    </header>
  );
};
