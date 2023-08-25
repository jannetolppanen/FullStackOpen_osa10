import { SignInForm } from '../../components/SignIn';
import { Formik } from 'formik';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import { initialValues } from '../../components/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn() 

      render(<Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>);

      fireEvent.changeText(screen.getByTestId('username'), 'kalle');
      fireEvent.changeText(screen.getByTestId('password'), 'password');
      fireEvent.press(screen.getByTestId('submit'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
          });
          
      });
    });
  });
});