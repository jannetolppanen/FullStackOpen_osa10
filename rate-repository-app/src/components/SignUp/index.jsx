import { View } from 'react-native';
import FormikTextInput from '../FormikTextInput'
import Button from '../Button'
import { Formik } from 'formik';
import { signUpSchema } from '../../utils/validations'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
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
      <Button testID="submit" label='Sign up' onPress={onSubmit} />
    </View>
  );
};

const SignUp = () => {
  // const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    console.log(values)
  //   const { username, password } = values;

  //   try {
  //     const { data } = await signIn({ username, password });
  //     const { accessToken } = data.authenticate
  //     console.log('SignIn.jsx: ',accessToken)
  //   } catch (e) {
  //     console.log('SignIn.jsx: ', e);
  //   }
  // } 
  }

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

export default SignUp

