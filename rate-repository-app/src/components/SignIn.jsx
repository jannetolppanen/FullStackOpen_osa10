import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  textarea: {
    padding: 10,
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 15,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white'
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput placeholderTextColor='grey' style={styles.textarea} name="username" placeholder="username" />
      <FormikTextInput placeholderTextColor='grey' style={styles.textarea} name="password" placeholder="password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    const { username, password } = values
    console.log(username, password)
  }

  return <Formik initialValues={initialValues} on onSubmit={onSubmit}>
    {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
  </Formik>

};

export default SignIn;