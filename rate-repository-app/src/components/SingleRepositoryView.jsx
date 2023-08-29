import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from '../graphql/queries';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import { StyleSheet } from 'react-native';

const SingleRepositoryView = () => {
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id },
  });
  if (loading) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  const repository = data.repository;
  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} githuburl />}
    />
  );
};

export default SingleRepositoryView;
