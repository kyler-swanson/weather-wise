import { useContext, useEffect } from 'react';

import { Quicksand } from 'next/font/google';
import styled from 'styled-components';

import { WeatherContext } from '@/contexts/WeatherContext';

import Spinner from './Spinner';
import TemperatureDisplay from './TemperatureDisplay';
import WeatherControl from './WeatherControl';
import WeatherIcon from './WeatherIcon';

const bebas = Quicksand({ weight: '400', subsets: ['latin'] });

const Card = styled.div`
  background-color: #212121;
  border-radius: 2rem;
  color: #ffffff;
  padding: 2em;
  box-shadow: 0px 2px 24px 11px rgba(48, 48, 48, 0.3);
`;

const WeatherHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CityName = styled.h1`
  font-family: ${bebas.style.fontFamily};
  margin-left: 10px;
`;

export default function WeatherCard() {
  const { weather, location, loading, error } = useContext(WeatherContext)!;

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <Card>
      <WeatherControl />
      {loading ? (
        <Spinner />
      ) : (
        weather && (
          <>
            <WeatherHeader>
              <WeatherIcon code={weather.current.weather[0].icon} />
              <TemperatureDisplay temp={weather.current.temp} />
              <CityName style={{ marginLeft: '30px' }}>
                {location?.name}, {location?.state}
              </CityName>
            </WeatherHeader>
          </>
        )
      )}
    </Card>
  );
}
