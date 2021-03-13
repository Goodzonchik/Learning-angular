export const errorsMap = new Map([
  ['required', 'Field is empty'],
  ['email', 'Email is not valid'],
  ['phone', 'Phone is not valid'],
]);

export const getError = (key: string): string | null => errorsMap.get(key);
