import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent, CardFooter, Button } from '@/components';

interface Props {
  className: string;
  headerClassName: string;
  header: string;
  description: string;
  link: string;
  buttonText?: string;
  solid?: boolean;
}

export const Tile = ({
  className,
  headerClassName,
  header,
  description,
  link,
  buttonText = 'Read more',
  solid = false
}: Props) =>
  <Card className={cn('text-center', solid ? '' : 'bg-transparent', className)}>
    <CardHeader className={cn('font-bold text-xl sm:text-2xl', headerClassName)}>{header}</CardHeader>
    <CardContent>{description}</CardContent>
    <CardFooter className="justify-center">
      <Link href={link} passHref>
        <Button className="uppercase" size="lg" variant={solid ? undefined : 'outline'}>{buttonText}</Button>
      </Link>
    </CardFooter>
  </Card>;
