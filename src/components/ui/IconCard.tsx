import Image from 'next/image';
import Link from 'next/link';

import { Card, CardHeader, CardContent, CardFooter, Button } from '@/components';

interface Props {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const IconCard = ({ icon, title, description, link }: Props) =>
  <Card>
    <CardHeader className="items-center">
      <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
      <div className="text-secondary font-bold text-sm text-left">{title}</div>
    </CardHeader>
    <CardContent className="text-center">
      <p>{description}</p>
    </CardContent>
    <CardFooter className="justify-center">
      <Link href={link} passHref>
        <Button className="">Read More</Button>
      </Link>
    </CardFooter>
  </Card>;
