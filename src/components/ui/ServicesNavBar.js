import Link from 'next/link';
import { Typography } from '@mui/material';

import { navigationLinks } from '@/services';

import './services-nav-bar.scss';

export const ServicesNavBar = () =>
  <nav className="services-nav-bar">
    <ul>
      {navigationLinks.map((link, index) =>
        <li key={`link${index}`}>
          <Link href={link.to} passHref>
            <Typography className="link" variant="h3">{link.text}</Typography>
          </Link>
        </li>
      )}
    </ul>
  </nav>;
