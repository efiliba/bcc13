import { Typography, Button, Icon } from '@mui/material';

import { SplitImageContent } from '@/components';

const PhoneIconColumnLink = () =>
  <div className="phone-icon-column-link">
    <Button
      variant="contained"
      size="large"
      startIcon={<Icon className="fa fa-phone-alt fa-2x" />}
      href="tel:1300 711 380"
    >
      1300 711 380
    </Button>
  </div>;

export const TheBest = () =>
  <div className="the-best">
    <div className="the-best__container">
      <SplitImageContent image="best-care.png" imageFirst>
        <Typography className="the-best__title" variant="h1">The Best Home Health Care Services Near Me</Typography>
        <Typography variant="body2">
          Best Choice Care aims to provide top-notch home care that feels like it comes from a family member.
        </Typography>
        <Typography variant="body2">
          While healthcare may be quite advanced in today’s world, we believe it lacks an element of care and comfort that humanises the process and enriches the experience for the client. Getting a support worker is not a transactional process which is why we go the extra mile to ensure our support workers are warm and compassionate. All our support workers go through extensive training programs to gain insight into holistic care.
        </Typography>
        <Typography variant="body2">
          True well-being encompasses all dimensions of one’s health, and we wish to provide just that. Having been in the business since 2017, we’ve garnered a reputation as Australia’s most reliable home care services.
        </Typography>
        <Typography variant="body2">
          Whether it’s getting a helping hand for seniors, NDIS support, personal care, community participation, or domestic help that you need, Best Choice Care is a one-stop destination with solutions for all your needs.
        </Typography>
        <Typography variant="body2">
          Get in touch with us today, and feel free to ask any questions you may have regarding the procedure.
        </Typography>
        <Typography className="action-title" variant="h4">
          GET A FREE CONSULTATION TODAY!
        </Typography>
        <PhoneIconColumnLink />
      </SplitImageContent>
    </div>
  </div>;
