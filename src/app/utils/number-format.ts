export type Currency = 'RUB' | 'EUR' | 'USD';

export const numberFormat = (
  value: number,
  currency: Currency = null
): string =>
  new Intl.NumberFormat(
    'ru-RU',
    currency
      ? {
          style: 'currency',
          currency,
        }
      : {}
  ).format(value);
