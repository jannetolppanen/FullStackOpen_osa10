import Button from './Button';
import FormikTextInput from './FormikTextInput';
import { View } from 'react-native';
import { Formik } from 'formik';
import { loginSchema } from '../utils/validations'

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
  const onSubmit = (values) => {
    const { username, password } = values;
    console.log(username, password);
  };

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
