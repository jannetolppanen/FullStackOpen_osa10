import { View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';
import { reviewSchema } from '../../utils/validations'

export const initialValues = {
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: ''
};

export const AddReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        placeholderTextColor='grey'
        name='ownerName'
        placeholder='Repository owner name'
      />
      <FormikTextInput
        placeholderTextColor='grey'
        name='repositoryName'
        placeholder='Repository name'
      />
            <FormikTextInput
        placeholderTextColor='grey'
        name='rating'
        placeholder='Rating between 0 and 100'
      />
            <FormikTextInput
        placeholderTextColor='grey'
        name='text'
        placeholder='Review'
      />
      <Button label='Create a review' onPress={onSubmit} />
    </View>
  );
};

const AddReview = () => {
  // const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    // const { username, password } = values;
    console.log(values)
  }

  //   try {
  //     const { data } = await signIn({ username, password });
  //     const { accessToken } = data.authenticate
  //     console.log('SignIn.jsx: ',accessToken)
  //   } catch (e) {
  //     console.log('SignIn.jsx: ', e);
  //   }
  // } 

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={reviewSchema}
    >
      {({ handleSubmit }) => <AddReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default AddReview

