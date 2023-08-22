
import Button from './Button';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
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
      <FormikTextInput
        placeholderTextColor='grey'
        name='username'
        placeholder='username'
      />
      <FormikTextInput
        placeholderTextColor='grey'
        name='password'
        placeholder='password'
        secureTextEntry
      />
      <Button label='Sign In' onPress={onSubmit} />
    </View>
  );
};

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