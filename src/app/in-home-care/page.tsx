"use client";

import { Paralax, Book, Location } from '@/components';

import { agedCare } from '@/services';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/HomeCareRequestReferralForm");

const AgedCare = () =>
  <>
    <Paralax
      className="bg-aged-care"
      title="IN-HOME CARE"
      description="If you are looking for in-home care services please complete the form below."
      action="SERVICE REQUEST FORM"
      onClick={handleClick}
    />
    <Book pages={agedCare} />
    <Location />
  </>;

export default AgedCare;
