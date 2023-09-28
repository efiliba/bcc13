import { Banner, ServicesRange, Nursing, PersonalCare, CommunityParticipation, HelpAtHome } from '@/components';

const Services = () =>
  <div className="">
    <Banner className="bg-services" title="Our Services" />
    {/* <ServicesRange /> */}
    <Nursing />
    {/* <PersonalCare />
    <CommunityParticipation />
    <HelpAtHome /> */}
  </div>;

export default Services;
