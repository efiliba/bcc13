import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

import './paralax.scss';

const ParalaxContainer = styled.div`
  background-image: url(/images/${({ image }) => image});
`;

export const Paralax = ({ image, title, description, action, onClick }) =>
  <ParalaxContainer className="paralax" image={image}>
    <div className="paralax__content">
      <Typography className="title" variant="h1">{title}</Typography>
      {description && <Typography className="description" variant="body">{description}</Typography>}
      {action && <Button className="action" size="large" variant="contained" color="primary" onClick={onClick}>{action}</Button>}
    </div>
  </ParalaxContainer>;
