import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    color: 'black',
    padding: 10,
    margin: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  errorInput: {
    borderColor: theme.colors.error,
    borderWidth: 2
  }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles.input, style, error && styles.errorInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;