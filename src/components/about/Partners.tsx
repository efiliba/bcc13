import Link from 'next/link';

import { Container } from '@/components';

export const Partners = () =>
  <Container contentClassName="grid md:grid-cols-3 items-center justify-items-center gap-y-10">
    <h2 className="md:col-span-3 font-bold text-xl md:text-3xl">Our partners in the community</h2>
    {/* <Link href="/" passHref> */}
      <picture>
        <img
          src="/images/turris.jpg"
          alt="Turris Logo"
          width={194}
          height={194}
          fetchPriority="high"
        />
      </picture>
    {/* </Link> */}
    <picture>
      <img
        src="/images/i-heart-ndis.png"
        alt="I Heart NDIS Logo"
        width={194}
        height={194}
        fetchPriority="high"
      />
    </picture>
    <picture>
      <img
        src="/images/pia.png"
        alt="Pia Logo"
        width={194}
        height={194}
        fetchPriority="high"
      />
    </picture>
  </Container>;
