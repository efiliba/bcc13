import Image from 'next/image';

export const SplitImageContent = ({ image, imageFirst, children }) =>
  <div className={`px-3 py-24 md:py-32 grid md:grid-cols-2 gap-x-20 gap-y-10 grid-areas-[image,text] ${imageFirst ? 'md:grid-areas-[image_text]' : 'md:grid-areas-[text_image]'}`}>
    <Image
      className="grid-in-[image]"
      src={`/images/${image}`}
      width={743}
      height={743}
      alt={image}
    />
    <div className="grid-in-[text]">
      {children}
    </div>
  </div>;
