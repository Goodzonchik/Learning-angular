import { Headquarters } from '../models/headquarters';

export const getHeadquart = (value: Headquarters) =>
  `${value.state} ${value.city} ${value.address}`;
