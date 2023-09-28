import { MainBanner, TheBest, Why } from '@/components';
// import { ServicesNavBar, MainBanner, Services, ProcessStages, , , LearnMoreOptions, LiveAtHome, SupportPackages, Testimonials } from '@/components';
import { tiles, services, learnMoreOptions, stages, supportPackages, testimonials } from '@/services';

const Home = () =>
  <main className="">
    <MainBanner
      image="/images/aged-care-at-home.png"
      title="Quality In-Home Care"
      description="Best Choice Care: Providing Healthcare in Sydney, Australia. Live in your own home, on your own terms."
      action="Learn More"
    />
    {/* <ServicesNavBar /> */}
    <TheBest />
    <Why tiles={tiles} />
    {/* <LearnMoreOptions options={learnMoreOptions} /> */}
    {/* <Services services={services} /> */}
    {/* <ProcessStages stages={stages} /> */}
    {/* <LiveAtHome /> */}
    {/* <SupportPackages packages={supportPackages} /> */}
    {/* <Testimonials testimonials={testimonials} /> */}
  </main>;
  
export default Home;
