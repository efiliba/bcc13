import { Typography } from '@mui/material';

import './alternating-color-list.scss';

export const AlternatingColorList = ({ list }) =>
  <div className="alternating-color-list">
    {list.map((row, index) => <Typography key={index} className="alternating-color-list__row">{row}</Typography>)}
  </div>;
