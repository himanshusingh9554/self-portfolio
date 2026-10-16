import { FileDown } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface ResumeDownloadButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function ResumeDownloadButton({
  variant = 'primary',
  size = 'md',
  className,
  label = 'View / Download Resume',
}: ResumeDownloadButtonProps) {
  return (
    <a
      href={profile.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer',
        {
          'bg-navy-600 text-white hover:bg-navy-500 shadow-lg shadow-navy-600/20 active:scale-[0.98]': variant === 'primary',
          'bg-surface-800 text-surface-200 hover:bg-surface-700 border border-surface-700 active:scale-[0.98]': variant === 'secondary',
          'text-navy-400 hover:text-navy-300 hover:bg-navy-500/10': variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-xs': size === 'sm',
          'px-5 py-2.5 text-sm': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
        },
        className
      )}
    >
      <FileDown className={cn({ 'w-3.5 h-3.5': size === 'sm', 'w-4 h-4': size === 'md', 'w-5 h-5': size === 'lg' })} />
      <span>{label}</span>
    </a>
  );
}
