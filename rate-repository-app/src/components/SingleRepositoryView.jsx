import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import ReviewList from './ReviewList';
import { GET_REPOSITORY } from '../graphql/queries';
import { View } from 'react-native';
import { FlatList } from 'react-native-web';

const SingleRepositoryView = () => {
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

  return (
    <View>
      <RepositoryItem item={repository} githuburl />
      <ReviewList />
    </View>
  );
};



export default SingleRepositoryView;
