import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: {
    lhs: ReactNode;
    rhs: ReactNode;
  };
}

export const SplitContent = ({ className, children }: Props) =>
  <div className={cn('grid md:grid-cols-2 gap-8 items-center text-left', className)}>
    {children.lhs}
    {children.rhs}
  </div>;
