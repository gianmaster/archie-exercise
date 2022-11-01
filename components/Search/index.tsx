/* eslint-disable react/no-children-prop */

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

type Props = {
  defaultValue?: string;
  onSearchDebounced: (value: string) => void;
  placeholder?: string;
};

const Search = ({
  defaultValue,
  onSearchDebounced,
  placeholder = 'Search',
}: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(defaultValue || '');
  }, [defaultValue]);

  useDebounce(
    () => {
      onSearchDebounced(search);
    },
    500,
    [search]
  );

  return (
    <InputGroup size={'lg'}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />

      <Input
        placeholder={placeholder}
        variant="filled"
        mb={4}
        marginBottom={1}
        value={search}
        onChange={handleSearch}
      />

      {/* add close button */}
      <InputRightElement
        children={
          search && (
            <CloseIcon
              color="gray.600"
              onClick={() => setSearch('')}
              cursor="pointer"
            />
          )
        }
      />
    </InputGroup>
  );
};

export default Search;
