import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components';

interface Props {
  className?: string;
  preTitleClassName?: string;
  preTitle?: string;
  title: string;
  descriptions: string[];
  link?: string;
  action?: string;
}

export const PreTitleDescription = ({ className, preTitleClassName, preTitle, title, descriptions, link, action = link }: Props) =>
  <div className={className}>
    {preTitle && <p className={cn('text-secondary text-2xl mb-4', preTitleClassName)}>{preTitle}</p>}
    <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
    {descriptions.map((description, index) =>
      <p key={index} className="mt-4">{description}</p>
    )}
    {link &&
      <Link href={link} passHref>
        <Button className="mt-12 uppercase" size="lg">{action}</Button>
      </Link>
    }
  </div>;
