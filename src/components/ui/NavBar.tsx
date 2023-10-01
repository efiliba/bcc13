import Link from 'next/link';

import { navigationLinks } from '@/services';

interface Props {
  className: string;
}

export const NavBar = ({ className }: Props) =>
  <nav className={className}>
    <ul>
      {navigationLinks.map((link, index) =>
        <li key={`link${index}`} className="pt-1 hover:text-primary">
          <Link href={link.to}>{link.text}</Link>
        </li>
      )}
    </ul>
  </nav>;
