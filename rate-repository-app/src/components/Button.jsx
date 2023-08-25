import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 15,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
  },
  disabled: {
    backgroundColor: theme.colors.textSecondary
  }
});

const Button = ({ label, onPress, disabled, style, testID }) => {
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.disabled
  ];

  const handlePress = disabled ? null : onPress

  return (
    <Pressable onPress={handlePress}>
      <Text style={buttonStyle} testID={testID}>{label}</Text>
    </Pressable>
  );
};

export default Button;
