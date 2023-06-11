import { Typography } from '@mui/material';

import './tiles.scss';

const Tile = ({ tile: { header: { icon, text }, description } }) =>
  <div className="tile">
    <img src={`/icons/${icon}.svg`} alt="icon" />
    <Typography className="title" variant="h4">{text}</Typography>
    <Typography variant="body2">{description}</Typography>
  </div>;

export const Tiles = ({tiles}) =>
  <div className="tiles">
    {tiles.map((tile, index) =>
      <Tile tile={tile} key={`tile${index}`} />
    )}
  </div>;
