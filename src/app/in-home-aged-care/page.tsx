"use client";

import { Paralax } from '@/components';

// import { Range, Nursing, PersonalCare, CommunityParticipation, HelpAtHome } from './components';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/HomeCareRequestReferralForm");

const AgedCare = () =>
  <div className="">
    <Paralax
      className="bg-aged-care"
      title="IN-HOME AGED CARE"
      description="If you are looking for in-home aged care services please complete the form below."
      action="SERVICE REQUEST FORM"
      onClick={handleClick}
    />
    {/* <Range />
    <Nursing />
    <PersonalCare />
    <CommunityParticipation />
    <HelpAtHome /> */}
  </div>;

export default AgedCare;
