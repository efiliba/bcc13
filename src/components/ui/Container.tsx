import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({className, children}: Props) =>
  <div className={`px-3 ${className}`}>
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  </div>;
