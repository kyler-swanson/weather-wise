import Head from 'next/head';

import ForecastCard from '@/components/ForecastCard';
import UnitSelector from '@/components/UnitSelector';
import WeatherCard from '@/components/WeatherCard';
import { WeatherProvider } from '@/contexts/WeatherContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 1rem;
    font-size: 0.5rem;
    height: auto;
  }
`;

export default function Home() {
  return (
    <WeatherProvider>
      <Head>
        <title>WeatherWise</title>
        <meta
          name='description'
          content='Get up-to-date weather information for your location with WeatherWise. Check the temperature, precipitation, wind, and more.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Wrapper>
        <WeatherCard />
        <ForecastCard />
      </Wrapper>
      <UnitSelector />
    </WeatherProvider>
  );
}
