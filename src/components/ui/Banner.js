import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

import './banner.scss';

const ParalaxContainer = styled.div`
  background-image: url(/images/${({ image }) => image});
`;

export const Banner = ({ image, title, description, action, onClick }) =>
  <ParalaxContainer className="banner" image={image}>
    <div className="banner__content">
      <Typography className="title" variant="h1">{title}</Typography>
      {description && <Typography className="description" variant="body">{description}</Typography>}
      {action && <Button className="action" size="large" variant="contained" color="primary" onClick={onClick}>{action}</Button>}
    </div>
  </ParalaxContainer>;
