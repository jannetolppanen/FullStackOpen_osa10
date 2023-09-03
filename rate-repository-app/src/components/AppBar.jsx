import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import useGetUser from '../hooks/useGetUser';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.appbar,
  },
  tab: {
    color: 'white',
    padding: 20,
  },
});

const AppBarTab = ({ text, linkto, onPress }) => {
  return (
    <Pressable>
      <Link to={linkto} onPress={onPress}>
        <Text style={styles.tab} fontSize='heading' fontWeight='bold'>
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

const AppBar = () => {
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { userInfo, loading } = useGetUser();

  const logout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  if (loading) {
    return null;
  }

  if (userInfo) {
    // console.log(userInfo.username, ' is logged in ');
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview} horizontal>

        <AppBarTab text='repositories' linkto='/' />

        {userInfo && <AppBarTab text='create a review' linkto='/addreview' />}

        {userInfo && <AppBarTab text='my reviews' linkto='/myreviews' />}

        {!userInfo && <AppBarTab text='sign in' linkto='/signin' />}

        {userInfo && <AppBarTab text='logout' linkto='/' onPress={logout} />}

        {!userInfo && <AppBarTab text='sign up' linkto='/signup' />}
        
      </ScrollView>
    </View>
  );
};

export default AppBar;
