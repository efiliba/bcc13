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
          "In January 2017, the founding of Best Choice Care Pty Ltd marked the inception of a new era in the in-home care sector. Established by a dedicated nurse with extensive experience in in-home care, the company was born from a profound mission to address the challenges observed in the residential care industry. These challenges included a lack of personalised care, a disconnect between support workers and recipients, and inadequate attention to individual needs.",
          "The founder's journey to make a significant difference in the sector was fueled by continuous improvement. The pursuit of Enrolled Endorsed Nursing, along with Support Coordination and NDIS training, equipped the founder with essential knowledge and expertise. This foundation led to the establishment of an in-home care company in Australia, underpinned by a clear vision: to foster a nurturing environment where support workers are trained in a unique approach. This approach emphasizes warmth and genuine compassion in caring for individuals, setting a new standard in the industry."
        ]}
        action="Get Started"
        link="/ndis-disability-support"
      />
    </SplitImageContent>
  </Container>;
