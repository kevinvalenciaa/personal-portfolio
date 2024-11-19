export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function getViewportSize() {
  if (!isBrowser()) return { width: 0, height: 0 };
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function scrollToTop(smooth: boolean = true) {
  if (!isBrowser()) return;
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

export function copyToClipboard(text: string): Promise<void> {
  if (!isBrowser() || !navigator.clipboard) {
    return Promise.reject('Clipboard API not available');
  }
  return navigator.clipboard.writeText(text);
}
