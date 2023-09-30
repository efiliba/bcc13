import { Container, SplitImageContent, PreTitleDescription } from '@/components';

export const ServicesRange = () =>
  <Container>
    <SplitImageContent image="our-services.png" imageFirst>
      <PreTitleDescription
        preTitle="Our Services"
        title="Our Comprehensive Range Of Services Cater To Every Need"
        descriptions={[
          "Best Choice Care strives to maintain the highest bar of home care services in Sydney, Australia. Each of our services is perfect so that our standard of quality remains the same throughout.",
          "Whether you’re switching from a support worker to a nurse, you’ll find each member of our team working in accordance with our values and establishing a genuine and compassionate relationship with their client."
        ]}
      />
    </SplitImageContent>
  </Container>;
