import Link from 'next/link';

import { Container, SplitImageContent, Button } from '@/components';

export const TheBest = () =>
  <Container>
    <SplitImageContent image="best-care.png" imageFirst>
      <h1 className="font-bold text-2xl md:text-4xl">Experience Holistic Support with Our High-Intensity NDIS Services</h1>
      <p className="mt-4">
        At Best Choice Care, we pride ourselves on delivering exceptional high-intensity NDIS services that redefine post-hospital care. By collaborating closely with our esteemed partner a Highly Experienced Nurse Practitioner & Clinical Director, we've pioneered a seamless transition process for participants. Starting from hospital discharge, we meticulously orchestrate the transition into the comfort of the participant's home. But that's just the beginning.
      </p>
      <p className="mt-4">
        To ensure continued support and care, we then handpick and train an elite team of support workers according to your specific care needs. Our dedicated teams are not just trained in essential care techniques but also instilled with a philosophy of holistic support.
      </p>
      <p className="mt-4">
        Together, we&apos;ve created a harmonious blend of expertise, compassion, and dedication, guaranteeing stability and the highest quality of care for each individual. Choose us, and witness firsthand the unparalleled commitment to making your support and care at home a comforting and empowering journey.
      </p>
      <h4 className="mt-8 font-bold text-xl uppercase">Speak to our Care Coordinator</h4>
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
