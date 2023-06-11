import Link from 'next/link';
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from '@mui/material';

import './icon-card.scss';

export const IconCard = ({ icon, title, description, link }) =>
  <Card className="icon-card">
    <CardHeader
      className="icon-card__header"
      titleTypographyProps={{ variant: 'h4' }}
      title={title}
      avatar={<img src={`/icons/${icon}.svg`} alt="icon" />}
    />
    <CardContent>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions>
      <Link className="link" href={link} passHref>
        <Button className="button" variant="contained" color="primary">Read More</Button>
      </Link>
    </CardActions>
  </Card>;
