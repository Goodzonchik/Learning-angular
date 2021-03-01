import { Headquarters } from '@models';

export const getHeadquart = (value: Headquarters) =>
  `${value.state} ${value.city} ${value.address}`;
