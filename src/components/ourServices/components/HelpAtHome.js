import { Typography } from '@mui/material';

import { ImageTextOverlay } from '@/components';

export const HelpAtHome = () =>
  <div className="help-at-home">
    <div className="help-at-home__container">
      <ImageTextOverlay image="help-at-home.png">
        <>
          <Typography className="help-at-home__pre-title">Help At Home</Typography>
          <Typography className="help-at-home__title" variant="h1">We Help Around The House</Typography>
          <Typography variant="body2">
            It can become difficult keeping up with household tasks.
          </Typography>
          <Typography variant="body2">
            Our support workers can help with routine tasks like cleaning and preparing meals so that everything remains
            in order until you get back onto your feet.
          </Typography>
        </>
      </ImageTextOverlay>
    </div>
  </div>;
