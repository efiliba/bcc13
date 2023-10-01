import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export const Container = ({ className, contentClassName, children }: Props) =>
  <div className={cn('bg-white px-3 py-24 md:py-32', className)}>
    <div className={cn('max-w-screen-xl mx-auto', contentClassName)}>
      {children}
    </div>
  </div>;
