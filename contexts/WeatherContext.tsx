import { Location } from '@/types/Location';
import { Unit } from '@/types/Unit';
import { WeatherData } from '@/types/WeatherData';
import { getReverseLocation, getWeatherData } from '@/utils/api';
import { createContext, ReactNode, useEffect, useState } from 'react';

type WeatherContextType = {
  weather: WeatherData | undefined;
  units: Unit;
  coordinates: Location | undefined;
  error: string | undefined;

  setUnits: (units: Unit) => void;
  setCoordinates: (coordinates: Location) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);
  const [units, setUnits] = useState<Unit>(process.env.NEXT_PUBLIC_DEFAULT_UNITS as Unit);

  const [coordinates, setCoordinates] = useState<Location | undefined>(undefined);

  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!coordinates) {
      (async () => {
        const lat = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_LAT as string);
        const lon = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_LON as string);

        const defaultCoordinates: Location = await getReverseLocation(lat, lon);
        setCoordinates(defaultCoordinates);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  // load weather data when location changes
  useEffect(() => {
    if (coordinates) {
      getWeatherData(coordinates, units)
        .then((data) => setWeather(data))
        .catch((err) => setError(err.message));
    }
  }, [coordinates, units]);

  return (
    <WeatherContext.Provider value={{ weather, units, coordinates, error, setCoordinates, setUnits }}>
      {children}
    </WeatherContext.Provider>
  );
};
