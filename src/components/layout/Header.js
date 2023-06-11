import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TabsUnstyled, TabsListUnstyled, TabUnstyled } from '@mui/base';
import { Toolbar, Icon, Typography } from '@mui/material';
import classNames from 'classnames';

import { pageLinks } from '@/services';

import './header.scss';

const IconText = ({ className, icon, text }) =>
  <div className={classNames('icon-text', { [`${className}`]: className })}>
    <Icon className={`strip__content--icon fa fa-${icon}`} />
    <Typography className="strip__content--text" variant="subtitle1">{text}</Typography>
  </div>;

const HeaderStrip = () =>
  <Toolbar className="header-strip__content">
    <IconText className="icon-text__phone" icon="phone-alt" text="1300 711 380" />
    <IconText icon="envelope" text="admin@bestchoicecare.com.au" />
    <IconText className="icon-text__location" icon="map-marker-alt" text="Location, NSW" />
    <a className="header-strip__social" target="_blank" href="https://www.facebook.com/bestchoicecare.com.au" rel="noopener noreferrer">
      <Typography variant="subtitle1">Follow Us</Typography>
      <Icon className="fab fa-facebook" />
    </a>
  </Toolbar>;

export const Header = () => {
  const router = useRouter();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setSelectedTabIndex(pageLinks.findIndex(({ to }) => to === router.pathname));
  }, [router.pathname]);

  const handleRouteClick = (url) => () => router.push(url);

  return (
    <header className="header">
      <div className="header-strip">
        <HeaderStrip />
      </div>
      <div className="header__content">
        <Link href="/" passHref>
          <img src="/images/best-choice-care.png" alt="Best Choice Care" />
        </Link>
        <TabsUnstyled className="navigation">
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
        </div>
      </div>
    </header>
  );
};
