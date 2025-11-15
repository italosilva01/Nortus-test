export const iconEmojiMap: Record<string, string> = {
  'graduation-cap': '🎓',
  'map-pin': '📍',
  'home': '🏠',
  'factory': '🏭',
  'school': '🏫',
  'book-open': '📖',
  'award': '🏆',
  'briefcase': '💼',
  'heritage': '🏛️',
  'plane': '✈️',
  'sports': '⚽',
  'restaurant': '🍽️',
  'shopping': '🛍️',
  'hotel': '🏨',
  'hospital': '🏥',
  'bank': '🏦',
};

export const getIconEmoji = (iconName: string): string => {
  const cleanIconName = iconName?.trim().toLowerCase();
  return iconEmojiMap[cleanIconName] || iconEmojiMap['map-pin'] || '📍';
};
