import { Card, CardHeader, CardContent, Avatar, Typography } from '@mui/material';

export const ProcessStages = ({ stages }) =>
  <div className="process-stages">
    <div className="process-stages__container">
      <Typography className="process-stages__header" variant="h1">
        How to start your home care services
      </Typography>
      {stages.map(({ stage, icon, heading, description }) =>
        <Card key={stage} className="process-stage">
          <Avatar className="process-stage__number">
            <Typography variant="body2">{stage}</Typography>
          </Avatar>
          <CardHeader
            titleTypographyProps={{ variant: 'body2' }}
            title={heading}
            avatar={<img src={`/icons/${icon}.svg`} alt="icon" />}
          />
          {description &&
            <CardContent>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          }
        </Card>
      )}
    </div>
  </div>;
