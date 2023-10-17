import { Paralax, ServicesRange, Nursing, PersonalCare, CommunityParticipation } from '@/components';

const Services = () =>
  <>
    <Paralax
      className="bg-services"
      contentClassName="pt-40"
      title="Our Services"
    />
    <ServicesRange />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
  </>;

export default Services;
