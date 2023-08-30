import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Filter = ({ setOrderBy, setOrderDirection, pickerValue, setPickerValue }) => {
  
  return (
    <Picker
    mode='dropdown'
    selectedValue={pickerValue}
    onValueChange={(itemValue) => {
      if (itemValue === 'latest') {
        setOrderDirection('DESC')
        setOrderBy('CREATED_AT')
        setPickerValue('latest')
      }
      if (itemValue === 'highest') {
        setOrderDirection('DESC')
        setOrderBy('RATING_AVERAGE')
        setPickerValue('highest')
      }
      if (itemValue === 'lowest') {
        setOrderDirection('ASC')
        setOrderBy('RATING_AVERAGE')
        setPickerValue('lowest')
      }      
    }}
    >
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='lowest' />
    </Picker>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const [ orderBy, setOrderBy ] = useState('DESC');
  const [ orderDirection, setOrderDirection ] = useState('CREATED_AT')
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
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
