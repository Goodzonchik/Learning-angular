export interface Rocket {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: Date;
  country: string;
  height: {
    meters: number;
  };
  diameter: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  flickr_images: string[];
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
