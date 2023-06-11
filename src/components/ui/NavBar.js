import Link from 'next/link';

import { navigationLinks } from '@/services';

import './nav-bar.scss';

export const NavBar = () =>
  <nav className="nav-bar">
    <ul>
      {navigationLinks.map((link, index) =>
        <li key={`link${index}`}>
          <Link href={link.to}>{link.text}</Link>
        </li>
      )}
    </ul>
  </nav>;
