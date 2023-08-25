import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from '../graphql/queries';

const SingleRepositoryView = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY,{
    variables: { "repositoryId": id },
  })
  if (loading) {
    return null
  }

  if (error) {
    console.log(error)
  }

  const repository = data.repository;

  return (
    <RepositoryItem item={repository} githuburl />

  );
};

export default SingleRepositoryView
