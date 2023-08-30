import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import SingleRepositoryView from './SingleRepositoryView';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn'
import AddReview from './AddReview';
import theme from '../theme';
import SignUp from './SignUp';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/repository/:id' element={<SingleRepositoryView />} />
        <Route path='addreview' element={<AddReview />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>

    </View>
  );
};

export default Main;