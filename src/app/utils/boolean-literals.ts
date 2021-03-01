export type BooleanLiteral = 'yesNo' | 'openClose';

export const booleanLiterals = new Map([
  ['yesNo', { confirmation: 'yes', denial: 'no' }],
  ['openClose', { confirmation: 'open', denial: 'close' }],
]);

export const getBooleanLiterals = (
  value: boolean,
  literal: BooleanLiteral
): string => {
  const literals = booleanLiterals.get(literal);
  return value ? literals.confirmation : literals.denial;
};
