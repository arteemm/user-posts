import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

type SearchBarProps = {
  searchValue: string;
  handleSearchValue: (value: string) => void;
  handleSkip: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, handleSearchValue, handleSkip }) => {
  return (
    <div className="w-30">
      <InputGroup>
        <FormControl
          placeholder="Поиск по заголовку"
          type="text"
          onChange={(e) => handleSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button as={'button'} onClick={handleSkip} bsPrefix="inner-btn">
          X
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
