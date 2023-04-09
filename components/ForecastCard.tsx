import { WeatherContext } from '@/contexts/WeatherContext';
import { useContext } from 'react';
import styled from 'styled-components';

import { Comfortaa } from 'next/font/google';
import WeatherIcon from './WeatherIcon';

const comfortaa = Comfortaa({ weight: '500', subsets: ['latin'] });

const Card = styled.div`
  position: relative;
  top: 40px;
  z-index: -1;
  display: flex;
  background-color: #212121;
  border-radius: 2rem;
  color: #ffffff;
  padding: 3em 2em 2em 2em;
  box-shadow: 0px 2px 24px 11px rgba(48, 48, 48, 0.3);

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const DayCard = styled.div`
  margin: 0 5px;
  color: #ffffff;
  font-family: ${comfortaa.style.fontFamily};
  padding: 0 1em;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 50%;
    top: 25%;
    right: 0;
    background-color: #ffffff;
    position: absolute;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;

const DayText = styled.div`
  font-size: 1em;
  text-align: center;
  margin-bottom: 5px;
`;

const HighTempText = styled.div`
  font-size: 2em;
  text-align: center;
`;

const LowTempText = styled.div`
  font-size: 0.9em;
  text-align: center;
`;

export default function ForecastCard() {
  const { weather, units, loading } = useContext(WeatherContext)!;

  return (
    <>
      {!loading && (
        <Card>
          {weather?.daily.map((day, i) => {
            return (
              <DayCard key={i}>
                <DayText>
                  {i === 0
                    ? 'Today'
                    : new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', day: '2-digit' })}
                </DayText>
                <HighTempText>
                  {Math.round(day.temp.day)}
                  <span style={{ fontSize: '0.5em', verticalAlign: 'text-top' }}>
                    {units == 'metric' ? '°C' : '°F'}
                  </span>
                </HighTempText>
                <LowTempText>
                  {Math.round(day.temp.night)}
                  <span style={{ fontSize: '0.5em', verticalAlign: 'text-top' }}>
                    {units == 'metric' ? '°C' : '°F'}
                  </span>
                </LowTempText>
                <WeatherIcon code={day.weather[0].icon} />
              </DayCard>
            );
          })}
        </Card>
      )}
    </>
  );
}
