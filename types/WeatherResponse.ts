import { WeatherData } from './WeatherData';

interface WeatherResponse {
  data?: WeatherData;
  error?: any;
}

export type { WeatherResponse };
