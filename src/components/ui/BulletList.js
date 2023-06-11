import { Typography } from '@mui/material';

import styles from './bullet-list.scss';

export const BulletList = ({ className, heading, list }) =>
  <>
    <Typography variant="h3">{heading}</Typography>
    <ul className={`bullet-list ${className}`}>
      {list.map((row, index) =>
        <li key={index}>
          <Typography>{row}</Typography>
        </li>
      )}
    </ul>
  </>;
