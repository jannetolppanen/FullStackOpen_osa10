import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import Filter from './Filter';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
  setOrderDirection,
  searchKeyword,
  setsearchKeyword,
  debouncedSearchKeyword

}) => {
  const [pickerValue, setPickerValue] = useState('latest');

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Filter
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
            pickerValue={pickerValue}
            setPickerValue={setPickerValue}
            searchKeyword={searchKeyword}
            setsearchKeyword={setsearchKeyword}
            debouncedSearchKeyword={debouncedSearchKeyword}
          />
        }
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  // Not turned into a class component because it works just fine as is.
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setsearchKeyword] = useState('');
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);
  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    debouncedSearchKeyword
  });

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
      searchKeyword={searchKeyword}
      setsearchKeyword={setsearchKeyword}
      debouncedSearchKeyword={debouncedSearchKeyword}
      />
  );
};

export default RepositoryList;
