import { MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components';

interface Props {
  className?: string;
  contentClassName?: string;
  title: string;
  description?: string;
  action?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Paralax = ({ className, contentClassName, title, description, action, onClick }: Props) =>
  <div className={cn('relative min-h-[420px] bg-fixed bg-no-repeat bg-cover bg-top', className)}>
    <div className={cn('relative text-text max-w-screen-xl mx-auto py-24 z-10 text-center', contentClassName)}>
      <h1 className="text-4xl md:text-6xl text-stroke">{title}</h1>
      {description && <p className="mt-4 md:text-xl text-stroke">{description}</p>}
      {action && <Button className="mt-20 uppercase" size="lg" onClick={onClick}>{action}</Button>}
    </div>
  </div>;
