"use client";

import { Paralax } from '@/components';
// import { Paralax, Book, Location } from '@/components';
import { cleaning } from '@/services';

// import styles from './domestic-assistance.module.scss';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/CleaningRequest");

const DomesticAssistance = () =>
  <div className="">
    <Paralax
      className="bg-domestic-assistance"
      title="REQUEST SERVICE"
      description="To request a service please use the referral link below."
      action="REQUEST FORM"
      onClick={handleClick}
    />
    {/* <Book pages={cleaning} />
    <Location /> */}
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
    <br />
    <hr />
  </div>;

export default DomesticAssistance;
