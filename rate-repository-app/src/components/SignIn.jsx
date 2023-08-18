import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
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