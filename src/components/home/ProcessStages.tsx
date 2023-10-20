import { Container, Card, CardHeader } from '@/components';

interface TileProps {
  stage: number;
  icon: string;
  heading: string;
}

interface Props {
  stages: TileProps[];
}

const Tile = ({ stage, icon, heading }: TileProps) =>
  <Card className="relative md:col-span-2 grid text-left sm:[&:nth-last-child(2)]:col-start-2">
    <div className="absolute top-[-10px] left-[-10px] bg-primary rounded-full w-7 leading-7 text-text text-center">
      {stage}
    </div>
    <CardHeader className="grid grid-cols-[53px_1fr] gap-x-4 items-center">
      <picture>
        <img
          className="h-[41px]" 
          src={`/icons/${icon}.svg`}
          alt="icon"
          width={53}
          height={41}
          loading="lazy"
        />
      </picture>
      <div className="text-base">{heading}</div>
    </CardHeader>
  </Card>;

export const ProcessStages = ({ stages }: Props) =>
  <Container contentClassName="text-center grid sm:grid-cols-2 md:grid-cols-6 gap-8">
    <h1 className="font-bold text-2xl md:text-4xl col-span-full mb-4 md:mb-16">
      How do you get started with our services?
    </h1>
    {stages.map(({ stage, icon, heading }) =>
      <Tile key={stage} stage={stage} icon={icon} heading={heading} />
    )}
  </Container>;
