import { Card } from '@mui/material';
import GoogleMapReact from 'google-map-react';

export const GoogleMaps = () =>
  <Card className="google-maps">
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
      }}
      defaultCenter={{
        lat: -33.901141,
        lng: 151.198216
      }}
      defaultZoom={12}
    />
  </Card>;
