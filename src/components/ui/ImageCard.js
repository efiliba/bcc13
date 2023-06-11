import Link from 'next/link';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

import './image-card.scss';

export const ImageCard = ({ image, title, description, link }) =>
  <Card className="image-card">
    <CardMedia component="img" image={`/images/${image}`} alt={image}/>
    <CardContent className="image-card__content">
      <Typography variant="h2">{title}</Typography>
      {description.map((text, index) =>
        <Typography key={index} variant="body2">{text}</Typography>
      )}
    </CardContent>
    <CardActions className="image-card__footer">
      <Link className="link" href={link} passHref>
        <Button className="button" variant="outlined" color="secondary">Learn More</Button>
      </Link>
    </CardActions>
  </Card>;
