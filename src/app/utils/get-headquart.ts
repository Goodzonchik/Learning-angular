import { Headquarters } from '@types';

export const getHeadquart = (value: Headquarters) =>
  `${value.state} ${value.city} ${value.address}`;
