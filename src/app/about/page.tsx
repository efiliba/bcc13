import { Paralax, OurStory, InspireHope, Partners } from '@/components';

const About = () =>
  <>
    <Paralax
      className="bg-about"
      contentClassName="pt-40"
      title="About Us"
    />
    <OurStory />
    <InspireHope />
    <Partners />
  </>;

export default About;
