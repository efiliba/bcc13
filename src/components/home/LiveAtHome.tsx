import Image from 'next/image';

import { Container, SplitImageContent } from '@/components';

export const LiveAtHome = () =>
  <Container className="relative bg-primary">
    <SplitImageContent className="text-text" image="elderly-care.png">
      <h1 className="font-bold text-2xl md:text-4xl pb-5">Live in your own home, on your own&nbsp;terms</h1>
      <p>
        Best Choice Care is simply not like other agencies. Here the power is always given to you, the client. Your
        needs and your family&apos;s wishes will always come first and we will do everything in our power to customise our
        services in a way that allows you to live life while being granted the freedom, safety and hassle-free care
        that you deserve.
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
