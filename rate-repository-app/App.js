import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

// import { StatusBar } from 'expo-status-bar';

const apolloClient = createApolloClient();

const App = () => {
  // using expoConfig instead of manifest because its deprecated and wont work on android
  // manifest2 works on android but wont work in browser
  console.log('Check App.js if theres problems', Constants.expoConfig.extra.APOLLO_URI);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      {/* <StatusBar style="auto" /> */}
    </>
  );
};

export default App;
