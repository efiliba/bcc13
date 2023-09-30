import Link from 'next/link';

import { Container, SplitImageContent, Button } from '@/components';

export const TheBest = () =>
  <Container>
    <SplitImageContent image="best-care.png" imageFirst>
      <h1 className="font-bold text-2xl md:text-4xl">The Best Home Health Care Services Near Me</h1>
      <p className="mt-4">
        Best Choice Care aims to provide top-notch home care that feels like it comes from a family member.
      </p>
      <p className="mt-4">
        While healthcare may be quite advanced in today’s world, we believe it lacks an element of care and comfort that humanises the process and enriches the experience for the client. Getting a support worker is not a transactional process which is why we go the extra mile to ensure our support workers are warm and compassionate. All our support workers go through extensive training programs to gain insight into holistic care.
      </p>
      <p className="mt-4">
        True well-being encompasses all dimensions of one’s health, and we wish to provide just that. Having been in the business since 2017, we’ve garnered a reputation as Australia’s most reliable home care services.
      </p>
      <p className="mt-4">
        Whether it’s getting a helping hand for seniors, NDIS support, personal care, community participation, or domestic help that you need, Best Choice Care is a one-stop destination with solutions for all your needs.
      </p>
      <p className="mt-4">
        Get in touch with us today, and feel free to ask any questions you may have regarding the procedure.
      </p>
      <h4 className="mt-8 font-bold text-xl uppercase">Get a feee consultation today!</h4>
      <Link href="tel:1300 711 380" passHref>
        <Button className="mt-8 font-bold text-base">
          <svg className="w-8 h-8 fill-white pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          1300 711 380
        </Button>
      </Link>
    </SplitImageContent>
  </Container>;
