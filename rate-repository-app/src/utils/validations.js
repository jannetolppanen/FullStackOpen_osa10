import * as yup from 'yup';

// ...

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
  .string()
    .required('Password is required'),
});

const reviewSchema = yup.object().shape({
  ownerName: yup
  .string()
  .required('Reposity owner name is required'),
  rating: yup
  .number()
  .typeError('Rating must be a number')
  .integer('Rating must be an integer')
  .min(0, 'Rating must be at least 0')
  .max(100, 'Rating must be at most 100')
  .required('Rating is required'),
  repositoryName: yup
  .string()
  .required('Repository is required'),
  text: yup
  .string()
})

export { loginSchema, reviewSchema }