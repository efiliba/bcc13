import Link from 'next/link';

import { Container, SplitImageContent, Button } from '@/components';

export const TheBest = () =>
  <Container>
    <SplitImageContent image="best-care.png" imageFirst>
      <h1 className="font-bold text-2xl md:text-4xl">THE BEST NDIS SUPPORT AND PRIVATE HOME CARE SERVICES</h1>
      <p className="mt-4">
        We have a background in this industry, it is our passion. Nurse owner operated. Our Founder has over 13 years
        of AIN, support worker and nursing background and still works actively along side our support workers, nurses,
        participants and care teams.
      </p>
      <p className="mt-4">
        🌟 At Best Choice Care, every client is VIP – including YOU!
      </p>
      <p className="mt-4">
        We&apos;re here to offer tailored support with a touch of zest. Think of us as your dedicated partners, helping you
        thrive comfortably in your own environment.
      </p>
      <p className="mt-4">
        🚀 Modern healthcare is great, but don&apos;t you think it sometimes misses that heartwarming touch? That’s where we
        come in! Our support workers aren’t just pros at their jobs; they&apos;re also handpicked for their big hearts.
        They’re trained not just to support but to uplift!
      </p>
      <p className="mt-4">
        🌈 Since 2017, we&apos;ve been spreading smiles and making waves as one of Sydney&apos;s most trusted home care providers.
        Together, we celebrate your strength and resilience.
      </p>
      <p className="mt-4">
        🤝 From helping our amazing participants with high intensity supports, personal care, community fun, or just
        lending a hand at home, we&apos;re your all-in-one support team!
      </p>
      <p className="mt-4">
        📞 Give us a call today! Got questions? Shoot! We&apos;re all ears (and a whole lot of heart). 1300 711 380
      </p>
      <h4 className="mt-8 font-bold text-xl uppercase">Get a free consultation today!</h4>
      <Link href="tel:1300 711 380" passHref>
        <Button className="mt-8 font-bold text-base" size="lg">
          <svg className="w-8 h-8 fill-white pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          1300 711 380
        </Button>
      </Link>
    </SplitImageContent>
  </Container>;
