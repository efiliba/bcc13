import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

export const MainBanner = ({ image, title, description, action }) =>
  <div className="relative min-h-[700px] grid items-center justify-items-center">
    <Image className="object-cover" fill src={image} alt={description} />
    <div className="absolute text-white text-center md:text-left px-3 w-full max-w-screen-xl mx-auto">
      <h1 className="text-6xl">{title}</h1>
      <h2 className="mt-4 text-xl max-w-[550px]">{description}</h2>
      <Link className="" href="/in-home-aged-care" passHref>
        <input className="mt-4" type="button" value={action} />
        <Button />
      </Link>
    </div>
  </div>;

{/* <div className={`px-3 ${className}`}>
<div className="max-w-screen-xl mx-auto"> */}

// .main-banner {
//   position: relative;
//   background-color: slategrey;

//   &__content {
//     position: absolute;
//     width: 100%;
//     top: 50%;
//     transform: translateY(-50%);
//     color: white;
    
//     &__container {
//       // @include content-layout();
//       max-width: map-get($breakpoints, 'lg');
//       margin: auto;
//       padding: 0 1rem;
//       text-align: center;

//       @include breakpoint(sm) {
//         text-align: left;
//       }

//       .title {
//         font-size: 3.5rem;
//         line-height: 4.2rem;
//         font-weight: normal;
//         padding: 0 2rem;

//         @include breakpoint(sm) {
//           font-size: 6.5rem;
//           line-height: 7.8rem;
//           padding: 0;
//           max-width: 84.4rem;
//         }
//       }

//       .description {
//         font-size: 1.6rem;
//         line-height: 2.4rem;
//         font-weight: normal;
//         margin-bottom: 6rem;
//         padding: 0 1rem;

//         @include breakpoint(sm) {
//           font-size: 2.2rem;
//           line-height: 2.5rem;
//           padding: 0;
//           max-width: 57.2rem;
//         }
//       }

//       a {
//         @include responsive-button-size();

//         color: $white;
//       }
//     }
//   }
// }
