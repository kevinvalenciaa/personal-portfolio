export function formatRelativeTime(date: Date): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return rtf.format(diffDays, "day");
}
