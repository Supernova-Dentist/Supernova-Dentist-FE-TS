export default function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}
