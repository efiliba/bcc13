import { MainBanner, TheBest, Why, Services, ProcessStages, LiveAtHome, SupportPackages, Testimonials, ContactForm } from '@/components';
// import { ServicesNavBar, LearnMoreOptions } from '@/components';
import { tiles, services, learnMoreOptions, stages, supportPackages, testimonials } from '@/services';

const Home = () =>
  <main>
    <MainBanner
      image="/images/aged-care-at-home.jpg"
      srcSets={[
        { srcSet: "/images/aged-care-at-home.avif", type: "image/avif" },
        { srcSet: "/images/aged-care-at-home.jpg", type: "image/jpg" }
      ]}
      title="Holistic Complex Care Support"
      description="Best Choice Care: Providing Healthcare in Australia. Live in your own home, on your own terms."
      action="Learn More"
    />
    {/* <ServicesNavBar /> */}
    <TheBest />
    <Why tiles={tiles} />
    <Testimonials testimonials={testimonials} />
    {/* <LearnMoreOptions options={learnMoreOptions} /> */}
    {/* <Services services={services} /> */}
    <ProcessStages stages={stages} />
    <LiveAtHome />
    {/* <SupportPackages packages={supportPackages} /> */}
    <ContactForm />
  </main>;
  
export default Home;
