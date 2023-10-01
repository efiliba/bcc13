import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent, CardFooter, Button } from '@/components';

export const Tile = ({ className, headerClassName, header, description, link, buttonText = 'Read more', solid = false }) =>
  <Card className={cn('text-center', solid ? '' : 'bg-transparent', className)}>
    <CardHeader className={cn('font-bold text-xl sm:text-2xl', headerClassName)}>{header}</CardHeader>
    <CardContent>{description}</CardContent>
    <CardFooter className="justify-center">
      <Link href={link} passHref>
        <Button className="uppercase" size="lg" variant={solid ? '' : 'outline'}>{buttonText}</Button>
      </Link>
    </CardFooter>
  </Card>;
