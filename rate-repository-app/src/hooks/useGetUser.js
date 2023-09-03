import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useGetUser = (includeReviews) => {
  const [userInfo, setUserInfo] = useState(null);
  const { data, error, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables: includeReviews !== null ? { includeReviews : true} : {includeReviews: false},
  });

  const fetchUser = async () => {
    if (loading) {
      console.log('loading in useGetUser');
    }
    if (error) {
      console.log('error in useGetUser');
    }
    if (data) {
      setUserInfo(data.me);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [data]);

  return { userInfo, loading, data };
};

export default useGetUser;