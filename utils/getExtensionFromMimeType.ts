export default (mimeType: string) => {
  const mimeTypesToExtensions = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    // Добавьте другие MIME-типы и их расширения по мере необходимости
  };

  return mimeTypesToExtensions[mimeType] || '';
};
