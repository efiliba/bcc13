import { cn } from "@/lib/utils";

import Image from 'next/image';

export const SplitImageContent = ({ className, imageClassName, image, imageFirst, children }) =>
  <div className={cn('grid md:grid-cols-2 gap-x-20 gap-y-10 grid-areas-[image,text]', imageFirst ? 'md:grid-areas-[image_text]' : 'md:grid-areas-[text_image]', className)}>
    <Image
      className={`grid-in-[image] ${imageClassName}`}
      src={`/images/${image}`}
      width={743}
      height={743}
      alt={image}
    />
    <div className="grid-in-[text]">
      {children}
    </div>
  </div>;
