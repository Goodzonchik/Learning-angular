import { todoAny } from '@utils/todo-any';

export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: todoAny[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: Date;
  launch_date_local: Date;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: todoAny;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string; // todo вывести тип
    first_stage: {
      cores: [
        {
          core_serial: null;
          flight: null;
          block: 5;
          gridfins: null;
          legs: null;
          reused: null;
          land_success: null;
          landing_intent: null;
          landing_type: null;
          landing_vehicle: null;
        }
      ];
    };
    second_stage: {
      block: 5;
      payloads: [
        {
          payload_id: 'SXM-7';
          norad_id: [];
          reused: false;
          customers: ['SiriusXM'];
          nationality: 'United States';
          manufacturer: 'SSL';
          payload_type: 'Satellite';
          payload_mass_kg: null;
          payload_mass_lbs: null;
          orbit: 'GTO';
          orbit_params: {
            reference_system: 'geocentric';
            regime: 'geostationary';
            longitude: null;
            semi_major_axis_km: null;
            eccentricity: null;
            periapsis_km: null;
            apoapsis_km: null;
            inclination_deg: null;
            period_min: null;
            lifespan_years: 15;
            epoch: null;
            mean_motion: null;
            raan: null;
            arg_of_pericenter: null;
            mean_anomaly: null;
          };
        }
      ];
    };
    fairings: {
      reused: null;
      recovery_attempt: null;
      recovered: null;
      ship: null;
    };
  };
  ships: [];
  telemetry: {
    flight_club: null;
  };
  launch_site: {
    site_id: 'ccafs_slc_40';
    site_name: 'CCAFS SLC 40';
    site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40';
  };
  launch_success: null;
  links: {
    mission_patch: null;
    mission_patch_small: null;
    reddit_campaign: null;
    reddit_launch: null;
    reddit_recovery: null;
    reddit_media: null;
    presskit: null;
    article_link: null;
    wikipedia: null;
    video_link: null;
    youtube_id: null;
    flickr_images: [];
  };
  details: null;
  upcoming: true;
  static_fire_date_utc: null;
  static_fire_date_unix: null;
  timeline: null;
  crew: null;
  last_date_update: '2020-12-13T17:03:48.000Z';
  last_ll_launch_date: null;
  last_ll_update: null;
  last_wiki_launch_date: '2020-12-13T17:30:00.000Z';
  last_wiki_revision: '2aa9a2fe-3d65-11eb-abb7-0e98a0ca8665';
  last_wiki_update: '2020-12-13T17:03:48.000Z';
  launch_date_source: 'wiki';
}
