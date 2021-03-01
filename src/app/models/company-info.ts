import { Headquarters } from './headquarters';

export interface CompanyInfo {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  ceo: string;
  cto: string;
  coo: string;
  cto_propulsion: string;
  valuation: number;
  headquarters: Headquarters;
  summary: string;
}
