import { Location } from '@/types/Location';
import { WeatherData } from '@/types/WeatherData';

export const getLocation = async (query: string): Promise<Location> => {
  const res = await fetch(`/api/geocode?query=${query}`);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error);
  }

  return json.data.location;
};

export const getReverseLocation = async (lat: number, lon: number): Promise<Location> => {
  const res = await fetch(`/api/rgeocode?lat=${lat}&lon=${lon}`);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error);
  }

  return json.data.location;
};

export const getWeatherData = async (location: Location, units: string): Promise<WeatherData> => {
  const res = await fetch(`/api/weather?lat=${location.latitude}&lon=${location.longitude}&units=${units}`);
  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error);
  }

  return json.data;
};
