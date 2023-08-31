import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchKeyword, setsearchKeyword, debouncedSearchKeyword }) => {
  const onChangeSearch = (query) => setsearchKeyword(query);

  return (
    <Searchbar
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchKeyword}
    />
  );
};

export default SearchBar;
