"use client";

import GoogleMapReact from 'google-map-react';

interface Props {
  className: string;
}

export const GoogleMaps = ({ className }: Props) =>
  <div className={className}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''
      }}
      defaultCenter={{
        lat: -33.901141,
        lng: 151.198216
      }}
      defaultZoom={12}
    />
  </div>;
