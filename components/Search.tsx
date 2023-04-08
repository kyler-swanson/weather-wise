import { WeatherContext } from '@/contexts/WeatherContext';
import { Location } from '@/types/Location';
import { getLocation } from '@/utils/api';
import { useContext, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  flex-grow: 1;
  outline: none;
  border: 1px solid #4f4f4f;
  border-radius: 2rem;
  margin-left: 10px;
  padding: 15px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  background: none;
  font-size: 1.5em;
  color: #ffffff;

  &::placeholder {
    font-size: 0.75em;
  }
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: #ffffff;
`;

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  const { setCoordinates } = useContext(WeatherContext)!;

  const search = async () => {
    if (query.length > 0) {
      try {
        const coords: Location = await getLocation(query);
        setCoordinates(coords);
        setError('');
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      setError('');
    }
  }, [error]);

  return (
    <>
      <SearchBox>
        <SearchInput
          type='text'
          placeholder='ex. London, GB'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete='off'
        />
        <SearchButton onClick={() => search()}>
          <MdSearch size='2em' />
        </SearchButton>
      </SearchBox>
    </>
  );
}
