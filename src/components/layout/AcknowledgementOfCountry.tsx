import Image from 'next/image';

export const AcknowledgementOfCountry = () => (
  <div className="grid grid-cols-[52px_52px_1fr] md:grid-cols-[min-content_min-content_1fr] gap-3 py-8">
    <Image
      className="justify-self-end"
      src="/images/aborigines-flag.svg"
      alt="aborigines flag"
      width={52}
      height={32}
      />
    <Image
      src="/images/torres-strait-islander-flag.svg"
      alt="torres streight islanders flag"
      width={52}
      height={32}
      />
    <h5 className="col-start-1 col-span-3 font-bold md:col-span-2 md:text-center">Acknowledgement of Country</h5>
    <p className="col-span-3 grid items-center text-xs md:col-start-3 md:col-end-3 md:row-start-1 md:row-end-3 md:ml-10 md:pl-10 md:border-l border-black">
      Best Choice Care acknowledges the traditional owners and custodians of country throughout Australia and
      acknowledges their continuing connection to land, water and community. We pay our respects to the people,
      the cultures and the elders past, present and&nbsp;emerging.
    </p>
  </div>
);
