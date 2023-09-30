import { Container, Tiles } from '@/components';

export const Why = ({ tiles }) =>
  <Container className="bg-gray-100">
    <div className="text-center">
      <h1 className="font-bold text-2xl md:text-4xl">Why Choose In-Home Care?</h1>
      <h4 className="mt-8 font-bold text-xl">
        In-Home Care Offers A Dignifying, Reliable, And Comfortable Care Experience
      </h4>
      <p className="mt-4 sm:px-[min(6.25rem,8%)]">
        Everyone knows that there is no place like home. We have amazing support workers to assist you with tasks
        that are becomming difficult, home care allows you to maintain your independence for longer. You can stay in a
        familiar place surrounded by your friends and family in the community. Home care allows you to have more
        control of your environment and how you want your care or assistance to be delivered. Live in your own home, on
        your own&nbsp;terms.
      </p>
      <Tiles tiles={tiles} />
    </div>
  </Container>;
