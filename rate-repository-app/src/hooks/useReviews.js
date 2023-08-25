import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = ({ id }) => {
  const [reviews, setReviews] = useState();
  // const [loading, setLoading] = useState(false);
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id },
  });

  const fetchReviews = async () => {
    if (loading) {
      // console.log('loading in useRepositories');
    }
    if (error) {
      // console.log('error in useRepositories');
    }
    if (data) {
      setReviews(data.repository)
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [data]);

  return { reviews, loading, refetch: fetchReviews };
};

export default useReviews;
