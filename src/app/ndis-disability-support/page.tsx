"use client";

import { Paralax, Book, Location } from '@/components';

import { disabilitySupport } from '@/services';

const handleClick = () => window.open('https://www.cognitoforms.com/BestChoiceCare1/NDISReferralFormBestChoiceCare');

const DisabilitySupport = () =>
  <>
    <Paralax
      className="bg-disability-support"
      title="NDIS PARTICIPANT REFERRAL"
      description="Support Coordinators and NDIS participants please use the referral link below."
      action="REFERRAL FORM"
      onClick={handleClick}
    />
    <Book pages={disabilitySupport} />
    <Location />
  </>;

export default DisabilitySupport;
