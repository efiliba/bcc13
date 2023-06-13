"use client";

// import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { TabsUnstyled, TabsListUnstyled, TabUnstyled } from '@mui/base';
// import { Toolbar, Icon, Typography } from '@mui/material';
// import classNames from 'classnames';

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
  const router = useRouter();

  // const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // useEffect(() => {
  //   setSelectedTabIndex(pageLinks.findIndex(({ to }) => to === router.pathname));
  // }, [router.pathname]);

  const handleRouteClick = (url) => () => router.push(url);

  return (
    <header className="header">
      {/* <div className="header-strip">
        <HeaderStrip />
      </div> */}
      <div className="header__content">
        <Link href="/" passHref>
          <img src="/images/best-choice-care.png" alt="Best Choice Care" />
        </Link>
        {pageLinks.map(({ to, text }, index) =>
          <div
            key={index}
            // className={classNames({ selected: index === selectedTabIndex })}
            onClick={handleRouteClick(to)}
          >
            <div>{text}</div>
          </div>
        )}
        <div className="icon-text__phone-link">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <div variant="subtitle2">Call Us</div>
          <div variant="h4">1300 711 380</div>
        </div>

      {/*   <TabsUnstyled className="navigation">
          <TabsListUnstyled className="navigation__list">
            {pageLinks.map(({ to, text }, index) =>
              <TabUnstyled
                key={index}
                className={classNames({ selected: index === selectedTabIndex })}
                onClick={handleRouteClick(to)}
              >
                <Typography variant="body2">{text}</Typography>
              </TabUnstyled>
            )}
          </TabsListUnstyled>
        </TabsUnstyled>
        <div className="icon-text__phone-link">
          <Icon className="fa fa-phone-alt" />
          <Typography variant="subtitle2">Call Us</Typography>
          <Typography variant="h4">1300 711 380</Typography>
        </div> */}
      </div>
    </header>
  );
};
