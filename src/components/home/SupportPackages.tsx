import { Container, IconCard } from '@/components';

interface Props {
  packages: {
    icon: string;
    title: string;
    description: string;
    link: string;
  }[];
}

export const SupportPackages = ({ packages }: Props) =>
  <Container>
    <h1 className="text-2xl md:text-4xl text-center pb-10">
      Home Care Support Options
    </h1>
    <div className="grid grid-cols-auto justify-between gap-6">
      {packages.map(({ icon, title, description, link }, index) =>
        <IconCard key={index} icon={icon} title={title} description={description} link={link} />
      )}
    </div>
  </Container>;