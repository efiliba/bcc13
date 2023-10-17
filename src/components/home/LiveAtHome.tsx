import Image from 'next/image';

import { Container, SplitImageContent } from '@/components';

export const LiveAtHome = () =>
  <Container className="relative bg-primary">
    <SplitImageContent className="text-text" image="ndis-plan.jpg">
      <h1 className="font-bold text-2xl md:text-4xl pb-5">Already have an NDIS plan?</h1>
      <p>
        Fantastic! Reach out to us directly and we can organise services immediately. If you have a support
        coordinator, we&apos;re happy to speak with them on your behalf. Get started here or call 1300 711 380.
      </p>
    </SplitImageContent>
    <Image
      className="hidden md:block absolute bottom-4"
      width={170}
      height={143}
      src="/images/dots.png"
      alt="decorative-image"
    />
  </Container>;
