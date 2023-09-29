import { Card, CardHeader, CardDescription, GoogleMaps } from '@/components';
import { Clock, Location as LocationIcon } from '@/components/icons';

const LocationCard = ({ className, icon, title, content }) =>
  <Card className={`py-5 bg-primary grid grid-cols-[53px_1fr] gap-4 items-center border-black ${className}`}>
    <CardHeader className="row-span-2">
      {icon}
    </CardHeader>
    <CardDescription className="text-3xl text-white">
      {title}
    </CardDescription>
    <CardDescription className="col-start-2 text-xl text-white">
      {content.map((text, index) =>
        <p key={index} className="pb-2">{text}</p>
      )}
    </CardDescription>
  </Card>;

export const Location = () =>
  <div className="bg-location bg-center bg-cover">
    <div className="px-3 pt-10 pb-16 grid lg:grid-cols-2 lg:grid-areas-[header_header,hours_map,here_map] gap-5">
      <h2 className="font-bold text-xl md:text-3xl text-center text-white lg:grid-in-[header] col-span-full justify-self-center">
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
    </div>
  </div>;
