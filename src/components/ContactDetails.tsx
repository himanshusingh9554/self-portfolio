import { Mail, Phone, Copy, Check, AlertCircle } from 'lucide-react';
import { useClipboard } from '@/hooks/useClipboard';
import { profile } from '@/data/portfolio';

export function ContactDetails() {
  const emailClip = useClipboard();
  const phoneClip = useClipboard();

  return (
    <div className="space-y-4">
      {/* Email */}
      <div className="glass-card p-4 flex items-center justify-between gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 text-surface-300 hover:text-navy-400 transition-colors min-w-0"
        >
          <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-surface-500 mb-0.5">Email</div>
            <div className="text-sm font-medium truncate">{profile.email}</div>
          </div>
        </a>
        <button
          onClick={() => emailClip.copy(profile.email)}
          className="p-2 text-surface-500 hover:text-surface-200 hover:bg-surface-800 rounded-lg transition-colors shrink-0"
          aria-label="Copy email to clipboard"
        >
          {emailClip.status === 'success' ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : emailClip.status === 'error' ? (
            <AlertCircle className="w-4 h-4 text-red-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Phone */}
      <div className="glass-card p-4 flex items-center justify-between gap-3">
        <a
          href={`tel:${profile.phone}`}
          className="flex items-center gap-3 text-surface-300 hover:text-navy-400 transition-colors min-w-0"
        >
          <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-surface-500 mb-0.5">Phone</div>
            <div className="text-sm font-medium truncate">{profile.phone}</div>
          </div>
        </a>
        <button
          onClick={() => phoneClip.copy(profile.phone)}
          className="p-2 text-surface-500 hover:text-surface-200 hover:bg-surface-800 rounded-lg transition-colors shrink-0"
          aria-label="Copy phone to clipboard"
        >
          {phoneClip.status === 'success' ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : phoneClip.status === 'error' ? (
            <AlertCircle className="w-4 h-4 text-red-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
