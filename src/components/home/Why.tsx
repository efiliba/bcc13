import { Container, Tiles, TileProps } from '@/components';

interface Props {
  tiles: TileProps[];
}

export const Why = ({ tiles }: Props) =>
  <Container className="bg-gray-100" contentClassName="text-center">
    <h1 className="font-bold text-2xl md:text-4xl">Benefits of Holistic Complex Care and Support at Home?</h1>
    <h4 className="mt-8 font-bold text-xl">
      In-Home Care Offers A Dignifying, Reliable, And Comfortable Care Experience
    </h4>
    <p className="mt-4 sm:px-[min(6.25rem,8%)]">
      Home is more than just a location; it&apos;s a cherished sentiment. Indeed, it&apos;s the center of our lives. Our
      dedicated support team is always on standby, ensuring that even the most challenging tasks become manageable.
      With our in-home care, you can maintain your independence, surrounded by the familiar comforts of your space.
      It&apos;s tailored to your preferences – you have the autonomy to choose how you want your care delivered. Remember,
      it&apos;s your home, your journey, and we&apos;re here to support you every step of the way.
    </p>
    <Tiles tiles={tiles} />
  </Container>;
