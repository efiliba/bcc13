import { Banner } from '@/components';
import { Range, Nursing, PersonalCare, CommunityParticipation, HelpAtHome } from './components';

export const OurServices = () =>
  <div className="our-services">
    <Banner image="banner.png" title="Our Services" />
    <Range />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
    <HelpAtHome />
  </div>;
