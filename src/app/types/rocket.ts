export interface Rocket {
  id: number;
  active: boolean;
  success_rate_pct: number;
  first_flight: string;
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
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  images: string[];
}
