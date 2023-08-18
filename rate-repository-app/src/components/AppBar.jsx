import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.appbar,
  },
  tab: {
    color: 'white',
    padding: 20,
  },
});

const AppBarTab = ({ text, linkto }) => {
  return (
    <Pressable>
      <Link to={linkto}>
        <Text style={styles.tab} fontSize='heading' fontWeight='bold'>
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='repositories' linkto='/' />
      <AppBarTab text='sign in' linkto='/signin' />
    </View>
  );
};

export default AppBar;
