import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    color: 'black'
  },
  errorInput: {
    borderColor: 'red', // Add this style for error border color
    borderWidth: 2
  }
});

const TextInput = ({ style, error, ...props }) => {
  // const textInputStyle = [styles.input, style];
  const textInputStyle = [styles.input, style, error ? styles.errorInput : null];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;