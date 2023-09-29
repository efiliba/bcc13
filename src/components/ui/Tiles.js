import Image from 'next/image';

import { Card, CardHeader, CardContent } from '@/components';

const Tile = ({ tile: { header: { icon, text }, description } }) =>
  <Card>
    <CardHeader className="grid grid-cols-[53px_1fr] gap-x-4 items-center">
      <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
      <h4 className="font-bold text-xl text-left">{text}</h4>
    </CardHeader>
    <CardContent className="text-left">
      {description}
    </CardContent>
  </Card>;

export const Tiles = ({tiles}) =>
  <div className="py-3 grid grid-cols-auto justify-between gap-6">
    {tiles.map((tile, index) =>
      <Tile tile={tile} key={`tile${index}`} />
    )}
  </div>;
