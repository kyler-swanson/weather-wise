import { Location } from '@/types/Location';
import { Unit } from '@/types/Unit';
import { WeatherData } from '@/types/WeatherData';
import { getReverseLocation, getWeatherData } from '@/utils/api';
import { createContext, ReactNode, useEffect, useState } from 'react';

type WeatherContextType = {
  weather: WeatherData | undefined;
  units: Unit;
  location: Location | undefined;
  error: string | undefined;

  setUnits: (units: Unit) => void;
  setLocation: (location: Location) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);
  const [units, setUnits] = useState<Unit>(process.env.NEXT_PUBLIC_DEFAULT_UNITS as Unit);

  const [location, setLocation] = useState<Location | undefined>(undefined);

  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!location) {
      const lat = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_LAT as string);
      const lon = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_LON as string);

      getReverseLocation(lat, lon).then((location: Location) => setLocation(location));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  // load weather data when location changes
  useEffect(() => {
    if (location) {
      getWeatherData(location, units)
        .then((data) => setWeather(data))
        .catch((err) => setError(err.message));
    }
  }, [location, units]);

  return (
    <WeatherContext.Provider value={{ weather, units, location, error, setLocation, setUnits }}>
      {children}
    </WeatherContext.Provider>
  );
};
