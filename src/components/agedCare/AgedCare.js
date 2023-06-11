import { Paralax, TableWithHeader, Book, Location } from '@/components';

import { fees, fundingOptions, agedCare } from '@/services';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/HomeCareRequestReferralForm");

export const AgedCare = () =>
  <div className="aged-care">
    <Paralax
      image="in-home-aged-care.jpg"
      title="IN-HOME AGED CARE"
      description="If you are looking for in-home aged care services please complete the form below."
      action="SERVICE REQUEST FORM"
      onClick={handleClick}
    />
    {/* <TableWithHeader
      heading="Government Subsidised - Home Care Package"
      description="How Many Hours of Care per Week Does a  Home Care Package through Best Choice Care Provide (dated) With our low fees you can get more hours of care"
      data={fees}
    />
    <TableWithHeader
      heading="What are my Options for obtaining and paying for my supports at home"
      description="The process involved in both funding options"
      data={fundingOptions}
    /> */}
    <Book pages={agedCare} />
    <Location />
  </div>;
