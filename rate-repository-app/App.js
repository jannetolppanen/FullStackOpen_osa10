import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import Constants from 'expo-constants';

const authStorage = new AuthStorage();

// import { StatusBar } from 'expo-status-bar';

const apolloClient = createApolloClient(authStorage);

const App = () => {
  // using expoConfig instead of manifest because its deprecated and wont work on android
  // manifest2 works on android but wont work in browser
  console.log(
    'Check App.js if theres problems',
    Constants.expoConfig.extra.APOLLO_URI
  );

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      {/* <StatusBar style="auto" /> */}
    </>
  );
};

export default App;
