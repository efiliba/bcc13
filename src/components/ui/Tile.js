import Link from 'next/link';
import { Typography, Button } from '@mui/material';
import classNames from 'classnames';

import './tile.scss';

export const Tile = ({ className, header, description, link, buttonText = 'Read more', solid = false }) =>
  <div className={classNames('tile-component', { solid, [`${className}`]: className })}>
    <Typography variant="h2">{header}</Typography>
    <Typography variant="body2">{description}</Typography>
    <Link className="link" href={link} passHref>
      <Button className="button" variant={solid ? 'contained' : 'outlined'} color={solid ? 'primary' : 'inherit'}>
        {buttonText}
      </Button>
    </Link>
  </div>;
