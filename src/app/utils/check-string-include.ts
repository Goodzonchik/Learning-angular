export const checkStringInclude = (
  base: string = '',
  searchString: string = ''
): boolean => base.toLowerCase().includes(searchString.toLowerCase());
