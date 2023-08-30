import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const Filter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();


  return (

    <Picker
    mode='dropdown'
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Latest repositories" value="java" />
  <Picker.Item label="Highest rated repositories" value="js" />
  <Picker.Item label="Lowest rated repositories" value="js" />
</Picker>

  );
};

export default Filter;