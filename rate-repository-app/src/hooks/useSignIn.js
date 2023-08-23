import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations'
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  // Tämä alempi pois koska käytetään useauthstorage hookkia
  // const authStorage = useContext(AuthStorageContext);
  const authStorage = useAuthStorage();
  console.log(authStorage)
  const [mutate, result] = useMutation(LOGIN);

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
      return signInResult;
    } catch (error) {
      console.error(error);
    }
  };

  return [signIn, result];
};

export default useSignIn