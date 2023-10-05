import { MainBanner, TheBest, Why, Services, ProcessStages, LiveAtHome, SupportPackages, Testimonials, ContactForm } from '@/components';
// import { ServicesNavBar, LearnMoreOptions } from '@/components';
import { tiles, services, learnMoreOptions, stages, supportPackages, testimonials } from '@/services';

const Home = () =>
  <main>
    <MainBanner
      image="/images/aged-care-at-home.png"
      srcSets={[
        // { srcSet: "/images/aged-care-at-home.avif", type: "image/avif" },
        { srcSet: "/images/aged-care-at-home.png", type: "image/png" }
      ]}
      title="THE BEST CHOICE FOR YOUR NDIS SUPPORTS"
      description="Best Choice Care: Providing Healthcare in Sydney, Australia. Live in your own home, on your own terms."
      action="Learn More"
    />
    <ContactForm />

    {/* <ServicesNavBar /> */}
    <TheBest />
    <Why tiles={tiles} />
    <Testimonials testimonials={testimonials} />
    {/* <LearnMoreOptions options={learnMoreOptions} /> */}
    {/* <Services services={services} /> */}
    <ProcessStages stages={stages} />
    <LiveAtHome />
    <SupportPackages packages={supportPackages} />
  </main>;
  
export default Home;
