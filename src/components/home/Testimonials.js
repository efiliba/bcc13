// import { useState } from 'react';
// import { Typography, Card, IconButton, Icon } from '@mui/material';

// import { SplitImageContent } from '@/components';

export const Testimonials = ({ testimonials }) => {
  const [ { index, name, location, message, previous, next }, setCurrentTestimonial ] = useState({
    ...testimonials[0],
    index: 0,
    previous: false,
    next: testimonials.length > 0
  });

  const handleClick = increment => () =>  {
    setCurrentTestimonial(({ index }) => ({
      ...testimonials[index + increment],
      index: index + increment,
      previous: index + increment > 0,
      next: index + increment < testimonials.length - 1
    }));
  }

  return (
    <div className="testimonials">
      {/* <div className="testimonials__container">
        <Typography className="testimonials__title mobile" variant="h1">What Our Customers Say</Typography>
        <SplitImageContent contentClassName="testimonials__content" image="care-feedback.png" imageFirst>
          <Typography className="testimonials__title tablet" variant="h1">What Our Customers Say</Typography>
          <Card className="testimonials__card">
            {message.map((text, index) =>
              <Typography key={index} variant="body2">{text}</Typography>
            )}
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body2">{location}</Typography> */}
            {/* <IconButton aria-label="Next testimonial" disabled={!next} onClick={handleClick(1)}>
              <Icon className="fa fa-arrow-right" />
            </IconButton>
            <IconButton aria-label="Previous testimonial" disabled={!previous} onClick={handleClick(-1)}>
              <Icon className="fa fa-arrow-left" />
            </IconButton> */}
          {/* </Card>
        </SplitImageContent>
      </div> */}
    </div>
  )
};
