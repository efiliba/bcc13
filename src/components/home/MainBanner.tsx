import Link from 'next/link';

import { Button } from '@/components';

interface Props {
  image: string;
  srcSets: {
    srcSet: string;
    type: string;
  }[];
  title: string;
  description: string;
  action: string;
}

export const MainBanner = ({ image, srcSets, title, description, action }: Props) =>
  <div className="relative min-h-[700px] grid items-center justify-items-center">
    <picture className="absolute inset-0">
      {srcSets.map(({ srcSet, type }, index) =>
        <source key={index} srcSet={srcSet} type={type} />
      )}
      <img
        className="object-cover w-full h-full"
        src={image}
        alt=""
        fetchPriority="high"
      />
    </picture>
    <div className="absolute text-text text-center px-3 w-full max-w-screen-xl mx-auto">
      <div className="glass">
        <h1 className="text-6xl">{title}</h1>
        <h2 className="m-auto md:ml-0 mt-4 text-xl">{description}</h2>
        <Link href="/in-home-care" passHref>
          <Button className="mt-12 uppercase" size="lg">{action}</Button>
        </Link>
      </div>
    </div>
  </div>;
