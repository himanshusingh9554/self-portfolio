import { useState, useEffect, useCallback } from 'react';

type CopyStatus = 'idle' | 'success' | 'error';

export function useClipboard(timeout = 2000) {
  const [status, setStatus] = useState<CopyStatus>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timer = setTimeout(() => setStatus('idle'), timeout);
    return () => clearTimeout(timer);
  }, [status, timeout]);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  return { copy, status };
}
