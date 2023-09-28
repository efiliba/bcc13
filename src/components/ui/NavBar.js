import Link from 'next/link';

import { navigationLinks } from '@/services';

export const NavBar = ({className}) =>
  <nav className={className}>
    <ul>
      {navigationLinks.map((link, index) =>
        <li key={`link${index}`} className="pt-1">
          <Link href={link.to}>{link.text}</Link>
        </li>
      )}
    </ul>
  </nav>;
