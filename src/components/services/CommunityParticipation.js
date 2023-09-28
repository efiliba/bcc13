// import { Typography } from '@mui/material';

// import { SplitContent, BulletList } from '@/components';

import { communityParticipation } from '@/services';

export const CommunityParticipation = () =>
  <div className="community-participation">
    <div className="community-participation__container">
    Community Participation
      {/* <SplitContent>
        {{
          lhs:
            <div className="lhs">
              <Typography className="lhs__community-participation__pre-title">Community Participation</Typography>
              <Typography className="lhs__community-participation__title" variant="h1">
                Improved Social Connection Aids Healing Of Existing Medical Conditions 
              </Typography>
              <Typography variant="body2">
                Staying isolated has its negative consequences, as the pandemic has proven. Some degree of social
                interaction is essential for every person, irrespective of their condition.
              </Typography>
              <Typography variant="body2">
                When going out and socialising becomes hard, our support workers assist clients in revisiting social spaces
                with the necessary help required. With this, our goal is to foster relationships and rebuild confidence
                within our clients in order to improve their quality of life.
              </Typography>
              <Typography variant="body2">
                Our support workers help clients by accompaning them to doctor visits and social outings in the community.
              </Typography>
            </div>,
          rhs:
            <div className="rhs">
              <BulletList className="rhs__community-participation" heading="Some common strategies include" list={communityParticipation} />
            </div>
        }}
      </SplitContent> */}
    </div>
  </div>;
