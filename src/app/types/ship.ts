export interface Position {
  latitude: number;
  longitude: number;
}

export interface Mission {
  name: string;
  flight: number;
}

export interface RootObject {
  ship_id: string;
  ship_name: string;
  ship_model?: any;
  ship_type: string;
  roles: string[];
  active: boolean;
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  weight_lbs: number;
  weight_kg: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: number;
  course_deg?: any;
  position: Position;
  successful_landings?: any;
  attempted_landings?: any;
  missions: Mission[];
  url: string;
  image: string;
}
