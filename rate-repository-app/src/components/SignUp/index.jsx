import { View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';
import { Formik } from 'formik';
import { signUpSchema } from '../../utils/validations';
import useCreateUser from '../../hooks/useCreateUser';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

export const SignInForm = ({ onSubmit }) => {
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
      <FormikTextInput
        placeholderTextColor='grey'
        name='passwordConfirmation'
        placeholder='password confirmation'
        secureTextEntry
      />
      <Button testID='submit' label='Sign up' onPress={onSubmit} />
    </View>
  );
};

const SignUp = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({
        username,
        password,
      });
      await signIn({ username, password });
    } catch (error) {
      console.error('Signup failed: ', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
