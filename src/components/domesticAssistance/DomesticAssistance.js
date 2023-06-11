import { Paralax, Book, Location } from '@/components';
import { cleaning } from '@/services';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/CleaningRequest");

export const DomesticAssistance = () =>
  <div className="domestic-assistance">
    <Paralax
      image="pots-716579_1280.jpg"
      title="REQUEST SERVICE"
      description="To request a service please use the referral link below."
      action="REQUEST FORM"
      onClick={handleClick}
    />
    <Book pages={cleaning} />
    <Location />
  </div>;
