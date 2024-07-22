export function truncateText(text: string, maxLength: number) {
  // Convert TrustedHTML to string if necessary
  // const plainText = typeof text === 'string' ? text : text.toString();

  // Strip HTML tags if necessary
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, '');

  if (strippedText.length <= maxLength) {
    return strippedText;
  }

  // Truncate and add ellipsis
  const truncatedText = strippedText.substring(0, maxLength) + '...';

  return truncatedText;
}
