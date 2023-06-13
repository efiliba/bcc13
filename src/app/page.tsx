import { MainBanner } from '@/components';

const handleClick = () => window.open("https://www.cognitoforms.com/BestChoiceCare1/CleaningRequest");

const Home = () =>
  <main className="">
    <MainBanner
      image="/images/aged-care-at-home.png"
      title="Quality In-Home Care"
      description="Best Choice Care: Providing Healthcare in Sydney, Australia. Live in your own home, on your own terms."
      action="Learn More"
      onClick={handleClick}
    />
  </main>;
  
export default Home;
