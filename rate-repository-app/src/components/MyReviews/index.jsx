import { FlatList } from 'react-native';
import Item from './Item';
import Text from '../Text';
import useGetUser from '../../hooks/useGetUser';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { loading, data } = useGetUser(true);
  if (loading) {console.log}

  if (data){
    const allReviews = data.me.reviews.edges.map(edge => edge.node.repository.reviews.edges[0].node);

    return (
      <FlatList
        data={allReviews}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item item={item} />
        )}
      />
    );

  }

  return <Text>No reviews available.</Text>;
};

export default MyReviews;
