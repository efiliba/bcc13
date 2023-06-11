import { Typography } from '@mui/material';

import { SplitContent, BulletList } from '@/components';

import { personalCare } from '@/services';

export const PersonalCare = () =>
  <div className="personal-care">
    <div className="personal-care__container">
      <SplitContent>
        {{
          lhs:
            <div className="lhs">
              <BulletList className="lhs__personal-care" heading="Personal care mostly includes" list={personalCare} />
            </div>,
          rhs:
            <div className="rhs">
              <Typography className="rhs__personal-care__pre-title">Personal Care</Typography>
              <Typography className="rhs__personal-care__title" variant="h1">
                Our Personal Care Services Are Carefully Curated So That The Client Receives Care Without Losing Dignity
              </Typography>
              <Typography variant="body2">
                At Best Choice Care we adopt a friendly approch towards our clients’ needs and assist our clients to live independantly in their own homes.
              </Typography>
              <Typography variant="body2">
                Best Choice Care can help you or your loved ones regain their strength and confidence. Whether one’s
                dealing with post-operation weakness, a chronic illness, a disability, or old age, our support workers are
                trained to assist you in all your home care needs.
              </Typography>
            </div>
        }}
      </SplitContent>
    </div>
  </div>;
