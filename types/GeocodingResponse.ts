import { Coordinates } from './Location';

interface GeocodingResponse {
  data?: {
    coords: Coordinates;
  };
  error?: any;
}

export type { GeocodingResponse };
