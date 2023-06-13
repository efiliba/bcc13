// import { Card, Icon, Typography } from '@mui/material';

import { GoogleMaps } from '@/components';

// import './location.scss';

// const LocationCard = ({ className, iconPrefix = "far", icon, title, content }) =>
//   <Card className={`${className} location--card`}>
//     <Icon className={`location--card__icon ${iconPrefix} fa-${icon}`} />
//     <Typography className="location--card__title" variant="h3">{title}</Typography>
//     <div className="location--card__content">
//       {content.map((text, index) => <Typography key={index} variant="body1">{text}</Typography>)}
//     </div>
//   </Card>;

export const Location = () =>
  <div className="location">
    <div className="location-container">
      {/* <div className="location-container__header">
        <Typography variant="h2">
          It&apos;s time to make the best choice, with Best&nbsp;Choice&nbsp;Care.
        </Typography>
      </div>
      <LocationCard className="office-hours" icon="clock" title="Office Hours" content={["8am - 5pm Monday to Friday"]} />
      <LocationCard className="we-are-here" iconPrefix="fas" icon="map-marker-alt" title="We are here" content={[
        "We service all areas around Sydney. Call us.",
        "Phone: 1300 711 380",
        "Email: admin@bestchoicecare.com.au"
      ]} /> */}
      <GoogleMaps />
    </div>
  </div>;
