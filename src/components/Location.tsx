import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Container, Card, GoogleMaps } from '@/components';
import { Clock, Location as LocationIcon } from '@/components/icons';

interface Props {
  className: string;
  icon: ReactNode;
  title: string;
  content: string[];
}

const LocationCard = ({ className, icon, title, content }: Props) =>
  <Card className={cn('p-3 sm:p-5 bg-primary grid grid-cols-[max-content_1fr] gap-2 sm:gap-4 items-center border-black', className)}>
    <div className="row-span-2">
      {icon}
    </div>
    <div className="text-3xl text-text">
      {title}
    </div>
    <div className="col-start-2 text-base sm:text-xl text-text">
      {content.map((text, index) =>
        <p key={index} className="pb-2">{text}</p>
      )}
    </div>
  </Card>;

export const Location = () =>
  <Container
    className="bg-location bg-center bg-cover pt-10 pb-16 md:pt-10 md:pb-16 "
    contentClassName="grid lg:grid-cols-2 lg:grid-areas-[header_header,hours_map,here_map] gap-5"
  >
    <h2 className="font-bold text-xl md:text-3xl text-center text-text lg:grid-in-[header] col-span-full justify-self-center">
      It&apos;s time to make the best choice, with Best&nbsp;Choice&nbsp;Care.
    </h2>
    <LocationCard
      className="lg:grid-in-[hours]"
      icon={<Clock className="w-8 h-8" />}
      title="Office Hours"
      content={["8am - 5pm Monday to Friday"]}
    />
    <LocationCard
      className="lg:grid-in-[here]"
      icon={<LocationIcon className="w-8 h-8" />} title="We are here" content={[
        "We service all areas around Sydney. Call us.",
        "Phone: 1300 711 380",
        "Email: admin@bestchoicecare.com.au"
      ]}
    />
    <GoogleMaps className="h-96 lg:h-auto lg:grid-in-[map]" />
  </Container>;
