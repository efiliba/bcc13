import { Container, SplitImageContent, PreTitleDescription } from '@/components';

export const InspireHope = () =>
  <Container className="bg-gray-50">
    <SplitImageContent image="inspire-hope.png">
      <PreTitleDescription
        title="To Inspire Hope and Well-Being With our High Quality In-home Care"
        descriptions={[
          "We're on a mission to revolutionise health care at home to make it feel like it's form a family member.",
          "Here at Best Choice Care, we understand that in times when clients reach out to us for support, they’re most likety going through a tough time in their life and require extra care, support and attention.",
          "Hence, our goal is to transform professional care into more than just physical care. We focus on the holistic aspect of caring which encompasses social, emotional, psychological and physical support."
        ]}
        action="Learn More"
        link="/"
      />
    </SplitImageContent>
  </Container>;
