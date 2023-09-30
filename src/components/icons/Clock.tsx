import { cn } from "@/lib/utils";

export const Clock = ({ className }: { className: string }) =>
  <svg className={cn('w-5 h-5 stroke-text', className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>;
