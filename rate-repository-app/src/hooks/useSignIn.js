import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations'
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from '../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  // Tämä alempi pois koska käytetään useauthstorage hookkia
  // const authStorage = useContext(AuthStorageContext);
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN);
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    try {
      const signInResult = await mutate({
        variables: {
          credentials: {
            username,
            password
          }
        }
      });
      const token = signInResult.data.authenticate.accessToken
      if (token) {
        await authStorage.setAccessToken(token)
        apolloClient.resetStore();
        navigate('/')
      }
      return signInResult;
    } catch (error) {
      console.error(error);
    }
  };

  return [signIn, result];
};

export default useSignIn