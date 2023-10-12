import { Paralax, OurStory, InspireHope } from '@/components';

const About = () =>
  <>
    <Paralax
      className="bg-about"
      contentClassName="pt-40"
      title="About Us"
    />
    <OurStory />
    <InspireHope />
  </>;

export default About;
