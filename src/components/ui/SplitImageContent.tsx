import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

import Image from 'next/image';

interface Props {
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  image: string;
  imageFirst: boolean;
  children: ReactNode;
}

export const SplitImageContent = ({ className, imageClassName, contentClassName, image, imageFirst, children }: Props) =>
  <div className={cn(
    'grid md:grid-cols-2 gap-x-20 gap-y-10 grid-areas-[image,text] items-center',
    imageFirst ? 'md:grid-areas-[image_text]' : 'md:grid-areas-[text_image]',
    className
  )}>
    <Image
      className={cn('grid-in-[image]', imageClassName)}
      src={`/images/${image}`}
      width={743}
      height={743}
      alt={image}
    />
    <div className={cn('grid-in-[text]', contentClassName)}>
      {children}
    </div>
  </div>;
