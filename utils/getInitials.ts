export default (fullName: string | null) => {
  if (typeof fullName !== 'string') return '';

  return fullName
    .trim()
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');
};
