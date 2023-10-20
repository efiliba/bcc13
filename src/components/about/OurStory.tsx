import { Container, SplitImageContent, PreTitleDescription } from '@/components';

export const OurStory = () =>
  <Container>
    <SplitImageContent
      image="our-story.jpg"
      srcSets={[
        { srcSet: "our-story.avif", type: "image/avif" },
        { srcSet: "our-story.jpg", type: "image/jpg" }
      ]}
      imageFirst
    >
      <PreTitleDescription
        preTitle="Our Story"
        title="Our Story Is One Filled With Ambition, Passion, And A Drive For Change"
        descriptions={[
          "In January 2017, Leslie Kadish, a dedicated nurse and experienced in-home care provider, founded Best Choice Care Pty Ltd with a profound mission in mind. Her journey began in the residential care sector, where she spent years witnessing the shortcomings: a lack of personalised care, a disconnection between support workers and recipients, and insufficient attention to individual needs.",
          "Determined to make a difference, Leslie embarked on a path of continuous improvement. She pursued Enrolled Endorsed Nursing, underwent Support Coordination and NDIS training. Armed with newfound knowledge and expertise, Leslie established her own in-home care company in Australia. Her vision was clear: to create a nurturing environment where support workers could be trained in her unique approach, one that prioritised warmth and genuine compassion in caring for individuals.",
          // "At Best Choice Care, our journey has been marked by years of refining our services. We are unwavering in our commitment to rigorously screening and training our support workers, ensuring they embody our mission of delivering high-quality care with heartfelt compassion.",
          // "Our philosophy is simple yet profound: we foster compatibility and uphold principles of dignity, respect, and trust in all our client relationships. We embrace inclusivity, empowering our clients to take control of their lives and significantly enhance their quality of life.",
          // "By entrusting the care of yourself or your loved one to Best Choice Care, you can rest assured that you will receive personalised, professional care that is infused with warmth and compassion. Experience peace of mind through our family-like services, where your well-being and comfort are our highest priorities."
        ]}
        action="Get Started"
        link="/ndis-disability-support"
      />
    </SplitImageContent>
  </Container>;
