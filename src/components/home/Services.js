import { Tile } from '@/components';

export const Services = ({services}) =>
  <div className="home-services">
    <div className="home-services__content">
      {services.map(({ header, description, link }, index) =>
        <Tile
          className="home-services__content__tile"
          header={header}
          description={description}
          link={link}
          key={`service${index}`}
          solid={index % 2 === 0}
        />
      )}
    </div>
  </div>;
