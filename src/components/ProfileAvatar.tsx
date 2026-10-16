import { useState } from 'react';
import { profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export function ProfileAvatar({ className, size = 'lg', showBadge = true }: ProfileAvatarProps) {
  const sources = [
    profile.avatarUrl,
    '/profile/photo.jpg',
    '/profile/profile.jpg',
    '/profile/self.jpg',
    '/self.jpg',
  ];
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleImgError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex(sourceIndex + 1);
    } else {
      setSourceIndex(-1); // All candidates failed, show initials
    }
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-48 h-48 sm:w-56 sm:h-56 text-4xl',
    xl: 'w-64 h-64 sm:w-72 sm:h-72 text-5xl',
  };

  return (
    <div className={cn('relative group inline-block select-none', className)}>
      {/* Ambient gradient glow behind avatar */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-navy-600 via-indigo-500 to-sky-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />

      {/* Frame container */}
      <div
        className={cn(
          'relative rounded-2xl overflow-hidden border border-surface-700/80 bg-surface-900 shadow-2xl flex items-center justify-center',
          sizeClasses[size]
        )}
      >
        {sourceIndex >= 0 ? (
          <img
            src={sources[sourceIndex]}
            alt={profile.fullName}
            onError={handleImgError}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-700 via-surface-900 to-surface-950 text-white font-bold tracking-tight">
            <span>{profile.fullName.split(' ').map((n) => n[0]).join('')}</span>
          </div>
        )}
      </div>

      {/* Available badge */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-surface-900/90 backdrop-blur-md border border-surface-700/80 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-medium text-surface-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full Stack</span>
        </div>
      )}
    </div>
  );
}
