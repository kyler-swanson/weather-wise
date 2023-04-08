import styled from 'styled-components';
import GeolocationButton from './GeolocationButton';
import Search from './Search';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export default function WeatherControl() {
  return (
    <Wrapper>
      <GeolocationButton />
      <Search />
    </Wrapper>
  );
}
