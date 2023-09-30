import { cn } from '@/lib/utils';

export const SplitContent = ({ className, children }) =>
  <div className={cn('grid md:grid-cols-2 gap-8 items-center text-left', className)}>
    {children.lhs}
    {children.rhs}
  </div>;
