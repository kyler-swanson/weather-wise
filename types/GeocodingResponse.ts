import { Location } from './Location';

interface GeocodingResponse {
  data?: {
    location: Location;
  };
  error?: any;
}

export type { GeocodingResponse };
