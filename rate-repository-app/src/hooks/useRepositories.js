import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection }
  });

  const fetchRepositories = async () => {
    if (loading) {
      // console.log('loading in useRepositories');
    }
    if (error) {
      // console.log('error in useRepositories');
    }
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
