import { WeatherContext } from '@/contexts/WeatherContext';
import { Unit } from '@/types/Unit';
import { useContext } from 'react';
import styled from 'styled-components';

const UnitWrapper = styled.div`
  position: absolute;
  top: 92.5%;
  left: 92.5%;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    top: 0;
    left: 0;
  }
`;

const UnitButton = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
`;

export default function UnitSelector() {
  const { setUnits } = useContext(WeatherContext)!;

  return (
    <UnitWrapper>
      <UnitButton onClick={() => setUnits(Unit.Metric)}>&deg;C</UnitButton>/
      <UnitButton onClick={() => setUnits(Unit.Imperial)}>&deg;F</UnitButton>
    </UnitWrapper>
  );
}
