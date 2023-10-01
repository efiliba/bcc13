import { Paralax, ServicesRange, Nursing, PersonalCare, CommunityParticipation } from '@/components';

const Services = () =>
  <>
    <Paralax
      className="bg-services bg-auto"
      contentClassName="pt-40"
      title="Our Services"
    />
    <ServicesRange />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
  </>;

export default Services;
