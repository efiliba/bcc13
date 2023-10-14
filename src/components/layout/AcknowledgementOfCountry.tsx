import Image from 'next/image';

import { Container } from '@/components';

export const AcknowledgementOfCountry = () =>
  <Container
    className="bg-gray-100 py-8 md:py-8"
    contentClassName="grid grid-cols-[52px_52px_1fr] md:grid-cols-[min-content_min-content_1fr] gap-3"
  >
    <Image
      className="w-auto justify-self-end"
      src="/images/aborigines-flag.svg"
      alt="aborigines flag"
      width={52}
      height={32}
    />
    <Image
      className="w-auto"
      src="/images/torres-strait-islander-flag.svg"
      alt="torres streight islanders flag"
      width={52}
      height={32}
    />
    <div className="col-start-1 col-span-3 font-bold md:col-span-2 md:text-center">Acknowledgement of Country</div>
    <p className="col-span-3 grid items-center md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-3 md:ml-10 md:pl-10 md:border-l border-black">
      Best Choice Care acknowledges the traditional owners and custodians of country throughout Australia and
      acknowledges their continuing connection to land, water and community. We pay our respects to the people,
      the cultures and the elders past, present and&nbsp;emerging.
    </p>
  </Container>;
