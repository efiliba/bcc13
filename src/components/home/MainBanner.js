import Link from 'next/link';
import { Button, Typography } from '@mui/material';

export const MainBanner = ({ image, title, description, action }) =>
  <div className="main-banner">
    <img className="main-banner__image" src={image} alt={description} />
    <div className="main-banner__content">
      <div className="main-banner__content__container">
        <Typography className="title" variant="h1">{title}</Typography>
        <Typography className="description" variant="h2">{description}</Typography>
        <Link className="link" href="/in-home-aged-care" passHref>
          <Button size="large" variant="contained" color="primary">{action}</Button>
        </Link>
      </div>
    </div>
  </div>;
