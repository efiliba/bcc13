import { Card } from '@mui/material';

import './image-text-overlay.scss';

export const ImageTextOverlay = ({ image, children }) =>
  <div className="image-text-overlay">
    <img className="image-text-overlay__image" src={`/images/${image}`} alt={image} />
    <div className="image-text-overlay__content">
      <Card className="image-text-overlay__card">
        {children}
      </Card>
    </div>
  </div>;
