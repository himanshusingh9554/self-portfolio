/**
 * Downloads a file reliably by fetching it as a blob and triggering an object URL download.
 * Prevents Chrome's "File wasn't available on site" error on local servers and CDNs.
 */
export async function downloadResumeFile(url: string, filename: string): Promise<boolean> {
  const candidateUrls = [
    url,
    '/profile/resume.pdf',
    '/profile/Himanshu-Singh-Resume.pdf',
    '/Himanshu-Singh-Resume.pdf',
    '/Himanshu_Singh_Resume.pdf',
  ];

  for (const candidate of candidateUrls) {
    try {
      const response = await fetch(candidate);
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 2000);
        return true;
      }
    } catch {
      // try next candidate
    }
  }

  // Final fallback: open original in new tab
  window.open(url, '_blank', 'noopener,noreferrer');
  return false;
}
