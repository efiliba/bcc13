import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  preTitleClassName?: string;
  preTitle: string;
  title: string;
  descriptions: string[];
}

export const PreTitleDescription = ({ className, preTitleClassName, preTitle, title, descriptions }: Props) =>
  <div className={className}>
    <p className={cn('text-secondary text-2xl mb-4', preTitleClassName)}>{preTitle}</p>
    <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
    {descriptions.map((description, index) =>
      <p key={index} className="mt-4">{description}</p>
    )}
  </div>;
