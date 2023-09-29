"use client";

import { Paralax, Location } from '@/components';
// import { Range, Nursing, PersonalCare, CommunityParticipation, HelpAtHome } from './components';

const handleClick = () => window.open('https://www.cognitoforms.com/BestChoiceCare1/NDISReferralFormBestChoiceCare');

const DisabilitySupport = () =>
  <div className="">
    <Paralax
      className="bg-disability-support"
      title="NDIS PARTICIPANT REFERRAL"
      description="Support Coordinators and NDIS participants please use the referral link below."
      action="REFERRAL FORM"
      onClick={handleClick}
    />
    <Location />

    {/* <Range />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
    <HelpAtHome /> */}
  </div>;

export default DisabilitySupport;
