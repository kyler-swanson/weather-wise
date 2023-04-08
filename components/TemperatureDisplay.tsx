import { WeatherContext } from '@/contexts/WeatherContext';
import { Comfortaa } from 'next/font/google';
import { useContext } from 'react';
import styled from 'styled-components';

const comfortaa = Comfortaa({ weight: '500', subsets: ['latin'] });

const Wrapper = styled.div`
  font-size: 3.5em;
  font-family: ${comfortaa.style.fontFamily};
`;

export default function TemperatureDisplay({ temp }: { temp: number }) {
  const { units } = useContext(WeatherContext)!;

  return (
    <Wrapper>
      <span>{Math.round(temp)}</span>
      <span style={{ fontSize: '0.5em', verticalAlign: 'text-top' }}>{units == 'metric' ? '°C' : '°F'}</span>
    </Wrapper>
  );
}
