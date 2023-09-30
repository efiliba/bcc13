import { Banner, ServicesRange, Nursing, PersonalCare, CommunityParticipation } from '@/components';

const Services = () =>
  <>
    <Banner className="bg-services" title="Our Services" />
    <ServicesRange />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
  </>;

export default Services;
