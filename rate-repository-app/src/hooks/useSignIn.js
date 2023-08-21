import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations'

const useSignIn = () => {
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