import { Container, SplitContent, BulletList, PreTitleDescription } from '@/components';

import { personalCare } from '@/services';

export const PersonalCare = () =>
  <Container>
    <SplitContent>
      {{
        lhs:
          <BulletList
            className="bg-gray-100 text-primary p-16"
            itemsClassName="text-black"
            heading="Personal care mostly includes"
            list={personalCare}
          />,
        rhs:
          <PreTitleDescription
            preTitle="Personal Care"
            title="Our Personal Care Services Are Carefully Curated So That The Client Receives Care Without Losing Dignity"
            descriptions={[
              "At Best Choice Care we adopt a friendly approch towards our clients’ needs and assist our clients to live independantly in their own homes.",
              "Best Choice Care can help you or your loved ones regain their strength and confidence. Whether one’s dealing with post-operation weakness, a chronic illness, a disability, or old age, our support workers are trained to assist you in all your home care needs."
            ]}
          />
      }}
    </SplitContent>
  </Container>;
