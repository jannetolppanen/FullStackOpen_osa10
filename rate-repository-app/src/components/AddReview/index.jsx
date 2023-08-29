import { View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';
import { reviewSchema } from '../../utils/validations';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../../graphql/mutations';
import { useNavigate } from 'react-router-native';

export const initialValues = {
  ownerName: '',
  rating: '',
  repositoryName: '',
  text: '',
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
        multiline
      />
      <Button label='Create a review' onPress={onSubmit} />
    </View>
  );
};

const AddReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const rating = parseInt(values.rating)
    const payload = {
      review: {
        ...values,
        rating: rating
      }
    };
    try {
      const { data } = await createReview({
        variables: payload,
      });
      console.log(data.createReview.repositoryId)
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (error) {
      console.log('Error creating review:', error.message);
    }
  };

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

export default AddReview;
