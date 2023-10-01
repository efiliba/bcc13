import Image from 'next/image';
import Link from 'next/link';

import { Card, CardHeader, CardContent, CardFooter, Button } from '@/components';

export const IconCard = ({ icon, title, description, link }) =>
  <Card>
    <CardHeader className="items-center">
      <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
      <h4 className="text-secondary font-bold text-sm text-left">{title}</h4>
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
