export interface IFormattedMeteor {
  id: string;
  name: string;
  diameter_meters: number;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_date_full: string;
  relative_velocity_kps: string;
}
export type CloseEarthObjects = Record<string, CloseEarthObject[]>;

export interface CloseEarthObject {
  id: string;
  name: string;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
}
export interface EstimatedDiameter {
  meters: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  };
}

export interface CloseApproachData {
  close_approach_date_full: string;
  relative_velocity: {
    kilometers_per_second: string;
  };
}
