import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import Filter from './Filter';
import { useState } from 'react';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, orderBy, setOrderBy, setOrderDirection }) => {
  const [ pickerValue, setPickerValue ] = useState('latest')
  
  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];
  
  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Filter orderBy={orderBy} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} pickerValue={pickerValue} setPickerValue={setPickerValue} />}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        />
    </View>
  );
};

const RepositoryList = () => {
  const [ orderBy, setOrderBy ] = useState('CREATED_AT');
  const [ orderDirection, setOrderDirection ] = useState('DESC')
  const { repositories } = useRepositories({ orderBy, orderDirection });

  return <RepositoryListContainer repositories={repositories} orderBy={orderBy} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} />;
};

export default RepositoryList;
