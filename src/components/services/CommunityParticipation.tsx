import { Container, SplitContent, PreTitleDescription, BulletList } from '@/components';

import { communityParticipation } from '@/services';

export const CommunityParticipation = () =>
  <Container className="bg-primary">
    <SplitContent>
      {{
        lhs:
          <PreTitleDescription
            className="text-text"
            preTitleClassName="text-text"
            preTitle="Community Participation"
            title="Improved Social Connection Aids Healing Of Existing Medical Conditions"
            descriptions={[
              "Staying isolated has its negative consequences, as the pandemic has proven. Some degree of social interaction is essential for every person, irrespective of their condition.",
              "When going out and socialising becomes hard, our support workers assist clients in revisiting social spaces with the necessary help required. With this, our goal is to foster relationships and rebuild confidence within our clients in order to improve their quality of life.",
              "Our support workers help clients by accompaning them to doctor visits and social outings in the community."
            ]}
          />,
        rhs:
          <BulletList
            className="bg-secondary text-text p-16"
            heading="Some common strategies include"
            list={communityParticipation}
          />
      }}
    </SplitContent>
  </Container>;
