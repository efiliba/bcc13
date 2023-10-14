import Image from 'next/image';

import { Card, CardHeader, CardContent } from '@/components';

export interface TileProps {
  header: {
    icon: string;
    text: string;
  };
  description: string;
}

interface Props {
  tiles: TileProps[];
}

const Tile = ({ tile: { header: { icon, text }, description } }: { tile: TileProps }) =>
  <Card>
    <CardHeader className="grid grid-cols-[53px_1fr] gap-x-4 items-center">
      <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
      <div className="font-bold text-xl text-left">{text}</div>
    </CardHeader>
    <CardContent className="text-left">
      {description}
    </CardContent>
  </Card>;

export const Tiles = ({ tiles }: Props) =>
  <div className="py-3 grid grid-cols-auto justify-between gap-6">
    {tiles.map((tile, index) =>
      <Tile key={`tile${index}`} tile={tile} />
    )}
  </div>;
