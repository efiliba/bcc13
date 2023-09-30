import { cn } from '@/lib/utils';

export const BulletList = ({ className, itemsClassName, heading, list }) =>
  <div className={className}>
    <h3 className="font-bold text-xl md:text-2xl pb-4">{heading}</h3>
    <ul className="list-disc text-2xl pl-4">
      {list.map((row, index) =>
        <li key={index} className="mt-4">
          <span className={cn('text-base', itemsClassName)}>{row}</span>
        </li>
      )}
    </ul>
  </div>;
