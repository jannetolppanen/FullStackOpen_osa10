import { Picker } from '@react-native-picker/picker';

const Filter = ({ setOrderBy, setOrderDirection, pickerValue, setPickerValue }) => {
  
  return (
    <Picker
    mode='dropdown'
    selectedValue={pickerValue}
    onValueChange={(itemValue) => {
      if (itemValue === 'latest') {
        setOrderDirection('DESC')
        setOrderBy('CREATED_AT')
        setPickerValue('latest')
      }
      if (itemValue === 'highest') {
        setOrderDirection('DESC')
        setOrderBy('RATING_AVERAGE')
        setPickerValue('highest')
      }
      if (itemValue === 'lowest') {
        setOrderDirection('ASC')
        setOrderBy('RATING_AVERAGE')
        setPickerValue('lowest')
      }      
    }}
    >
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='lowest' />
    </Picker>
  );
};

export default Filter