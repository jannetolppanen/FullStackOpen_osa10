import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    color: 'red'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;