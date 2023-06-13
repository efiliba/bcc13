import Link from 'next/link';

import { navigationLinks } from '@/services';

export const NavBar = ({className}) =>
  <nav className={className}>
    <ul>
      {navigationLinks.map((link, index) =>
        <li key={`link${index}`}>
          <Link href={link.to}>{link.text}</Link>
        </li>
      )}
    </ul>
  </nav>;

// .nav-bar {
//   ul {
//     margin: 0;
//     padding: 0;
//     list-style-type: none;
//     font-size: 1.4rem;
//     text-align: center;

//     li {
//       display: inline-block;

//       a {
//         color: $mild-grey;
//         display: block;
//         padding: 0.6rem 0;
//         text-decoration: none;

//         &:hover {
//           color: $primary;
//         }
//       }
//     }
//   }
// }
