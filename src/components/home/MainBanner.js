import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

export const MainBanner = ({ image, title, description, action }) =>
  <div className="relative min-h-[700px] grid items-center justify-items-center">
    <Image className="object-cover" fill src={image} alt={description} priority />
    <div className="absolute text-white text-center md:text-left px-3 w-full max-w-screen-xl mx-auto">
      <h1 className="text-6xl">{title}</h1>
      <h2 className="m-auto md:ml-0 mt-4 text-xl max-w-[550px]">{description}</h2>
      <Link href="/in-home-aged-care" passHref>
        <Button className="mt-12 uppercase">{action}</Button>
      </Link>
    </div>
  </div>;
