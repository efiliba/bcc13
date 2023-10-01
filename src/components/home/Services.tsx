import { Container, Tile } from '@/components';

interface Props {
  services: {
    header: string;
    description: string;
    link: string;
  }[];
}

export const Services = ({ services }: Props) =>
  <Container className="bg-services bg-cover" contentClassName="grid grid-cols-auto-xl gap-x-12 gap-y-5">
    {services.map(({ header, description, link }, index) => {
      const solid = index % 2 === 0;

      return (
        <Tile
          className={`md:px-16 md:py-14 ${solid ? '' : 'text-text'}`}
          headerClassName={solid ? 'text-primary' : ''}
          header={header}
          description={description}
          link={link}
          key={`service${index}`}
          solid={solid}
        />
      );
    })}
  </Container>;
