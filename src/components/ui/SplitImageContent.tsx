import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  image: string;
  srcSets: {
    srcSet: string;
    type: string;
  }[];
  imageFirst?: boolean;
  children: ReactNode;
}

export const SplitImageContent = ({
  className,
  imageClassName,
  contentClassName,
  image,
  srcSets,
  imageFirst,
  children
}: Props) =>
  <div className={cn(
    'grid md:grid-cols-2 gap-x-20 gap-y-10 grid-areas-[image,text] items-center',
    imageFirst ? 'md:grid-areas-[image_text]' : 'md:grid-areas-[text_image]',
    className
  )}>
    <picture className="">
      {srcSets.map(({ srcSet, type }, index) =>
        <source key={index} srcSet={`/images/${srcSet}`} type={type} />
      )}
      <img
        className="object-cover w-full h-full"
        src={image}
        alt={image}
        loading="lazy"
      />
    </picture>
    <div className={cn('grid-in-[text]', contentClassName)}>
      {children}
    </div>
  </div>;
