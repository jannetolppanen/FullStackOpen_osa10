import Button from './Button';
import { View} from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { loginSchema } from '../validations';

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
      on
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
