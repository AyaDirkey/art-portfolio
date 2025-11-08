export const getLocalizedText = (
  arTitle: string,
  enTitle: string,
  language: string
): string => {
  return language === 'ar' ? arTitle : enTitle;
};