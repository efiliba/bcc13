import Image from 'next/image';

const Tile = ({ tile: { header: { icon, text }, description } }) =>
  <div className="p-12 sm:px-10 sm:py-8 bg-white rounded-md grid grid-cols-[53px_1fr] gap-x-4 gap-y-8 items-center text-left">
    <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
    <h4 className="font-bold text-xl">{text}</h4>
    <p className="col-span-2">{description}</p>
  </div>;

export const Tiles = ({tiles}) =>
  <div className="py-3 grid grid-cols-auto justify-between gap-6">
    {tiles.map((tile, index) =>
      <Tile tile={tile} key={`tile${index}`} />
    )}
  </div>;
