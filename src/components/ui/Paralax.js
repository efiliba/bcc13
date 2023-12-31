import { Button } from '@/components';

export const Paralax = ({ className, title, description, action, onClick }) =>
  <div className={`bg-fixed bg-no-repeat bg-cover bg-top relative after:absolute after:inset-0 after:bg-gray-400 after:opacity-80 after:mix-blend-multiply ${className}`}>
    <div className="text-white max-w-screen-xl mx-auto py-24 relative z-10 text-center">
      <h1 className="text-4xl md:text-6xl">{title}</h1>
      {description && <p className="mt-4 md:text-xl">{description}</p>}
      {action && <Button className="mt-20 uppercase" onClick={onClick}>{action}</Button>}
    </div>
  </div>;
