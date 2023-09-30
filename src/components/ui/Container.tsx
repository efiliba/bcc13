import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: Props) =>
  <div className={cn('bg-white px-3 py-24 md:py-32', className)}>
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  </div>;
