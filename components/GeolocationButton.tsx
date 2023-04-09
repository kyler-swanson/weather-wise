import { WeatherContext } from '@/contexts/WeatherContext';
import { Location } from '@/types/Location';
import { getReverseLocation } from '@/utils/api';
import { useContext, useEffect, useState } from 'react';
import { IoMdLocate } from 'react-icons/io';
import styled from 'styled-components';

const StyledButton = styled(IoMdLocate)`
  cursor: pointer;
`;

export default function GeolocationButton() {
  const [error, setError] = useState<string | undefined>(undefined);

  const { setLocation } = useContext(WeatherContext)!;

  useEffect(() => {
    if (error) {
      alert(error);
      setError('');
    }
  }, [error]);

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { latitude, longitude } = coords;

        try {
          const location: Location = await getReverseLocation(latitude, longitude);
          setLocation(location);
        } catch (err: any) {
          setError(err.message);
        }
      });
    }
  };

  return <StyledButton size='2em' onClick={() => getLocation()} />;
}
