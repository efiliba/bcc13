import Link from 'next/link';

import { Container } from '@/components';

export const Partners = () =>
  <Container contentClassName="grid md:grid-cols-2 items-center justify-items-center gap-y-2">
        <Link href="/" passHref>
          <picture>
            <img
              src="/images/number-one.jpg"
              alt="Number One Logo"
              width={194}
              height={80}
              fetchPriority="high"
            />
          </picture>
        </Link>
        <Link href="/" passHref>
          <picture>
            <img
              src="/images/i-heart-ndis.png"
              alt="Number One Logo"
              width={194}
              height={80}
              fetchPriority="high"
            />
          </picture>
        </Link>
  </Container>;
