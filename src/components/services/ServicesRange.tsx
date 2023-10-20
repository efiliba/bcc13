import { Container, SplitImageContent, PreTitleDescription } from '@/components';

export const ServicesRange = () =>
  <Container>
    <SplitImageContent
      image="our-services.jpg"
      srcSets={[
        { srcSet: "our-services.avif", type: "image/avif" },
        { srcSet: "our-services.jpg", type: "image/jpg" }
      ]}
      imageFirst
    >
      <PreTitleDescription
        preTitle="Our Services"
        title="Our Comprehensive Range Of Services Cater To Every Need"
        descriptions={[
          "At Best Choice Care we are dedicated to transforming the lives of complex care participants by providing exceptional, high-intensity NDIS supports in the community setting. Our expertise is not just limited to offering routine care; we are specialised in bridging the gap between hospital discharge and a successful transition back to the comforts of one's home. We understand that such transitions can be challenging, both physically and emotionally. That's why our team works diligently, hand in hand with healthcare professionals, to create a seamless and supportive journey for every participant.",
          "Recognising the diverse and individualised needs of our participants, we have cultivated a program that ensures round-the-clock, 24-hour care for those who require it. Our focus is to maintain the integrity, safety, and comfort of a home environment while providing medical and therapeutic care on par with institutional settings. This approach promotes familiar and comfortable surroundings but also respects the individual's autonomy and dignity.",
          "Our care teams are meticulously trained, not only in technical skills but also in the art of compassionate caregiving. They are equipped to address varying care needs, from routine tasks to critical medical interventions, ensuring that each participant feels secure, understood, and genuinely cared for.",
          "In essence, Best Choice Care is not just a service provider. We are a community of dedicated professionals committed to enhancing the quality of life for NDIS complex care participants, championing their right to receive the highest standard of care right in the heart of their homes."
        ]}
      />
    </SplitImageContent>
  </Container>;
