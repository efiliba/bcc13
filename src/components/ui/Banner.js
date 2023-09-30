import { cn } from '@/lib/utils';

// export const Banner = ({ className, title, description, action, onClick }) =>
export const Banner = ({ className, title }) =>
  <div className={cn('py-60 bg-no-repeat bg-cover bg-center relative', className)}>
    <div className="max-w-screen-xl mx-auto text-center">
      <h1 className="text-text text-4xl md:text-6xl">{title}</h1>
      {/* {description && <div className="mt-4 md:text-xl">{description}</div>}
      {action && <Button className="mt-4 uppercase">{action}</Button>} */}
      {/* <Button className="action" size="large" variant="contained" color="primary" onClick={onClick}>{action}</Button>} */}
    </div>
  </div>;
