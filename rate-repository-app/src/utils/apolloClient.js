import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { APOLLO_URI } = Constants.expoConfig.extra;

const httpLink = createHttpLink({
  uri: APOLLO_URI,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log('apolloClient.js: ', e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

// const httpLink = createHttpLink({
//   // Replace the IP address part with your own IP address!
//   uri: Constants.expoConfig.extra.APOLLO_URI,
// });

// const createApolloClient = () => {
//   return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//   });
// };

// export default createApolloClient;