import Button from '../Button';
import FormikTextInput from '../FormikTextInput';
import { View } from 'react-native';
import { Formik } from 'formik';
import { loginSchema } from '../../utils/validations'
import useSignIn from '../../hooks/useSignIn';

export const initialValues = {
  username: '',
  password: '',
};

export const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        placeholderTextColor='grey'
        name='username'
        placeholder='username'
        testID="username"
      />
      <FormikTextInput
        placeholderTextColor='grey'
        name='password'
        placeholder='password'
        secureTextEntry
        testID="password"
      />
      <Button testID="submit" label='Sign In' onPress={onSubmit} />
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      const { accessToken } = data.authenticate
      console.log('SignIn.jsx: ',accessToken)
    } catch (e) {
      console.log('SignIn.jsx: ', e);
    }
  } 

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
