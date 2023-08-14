import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App =() =>{
  const [inputValues, setInputValues] = useState({
    input1: '',
  });

const [sum, setSum] = useState(0);

const handleInputChange = (inputName, value) => {
  setInputValues ({...inputValues, [inputName]: value});
};

const handleSum = () =>{
  const {input1} = inputValues;
  const result = parseInt(input1);

  setSum(result);
};

return (
  <View style={styles.container}>
  <Text style={styles.label}> Input1 </Text>
  <TextInput
  style={styles.input}
  onChangeText = {(value) => handleInputChange ('input1', value)}
  value= {inputValues.input1}
  keyboardType = "numeric"
  />

  <Button title="Somar" onPress={handleSum}/>
  <Text style = {styles.result}> Resultados: {sum}</Text>
  </View>
)
};

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: '#c8a2c8',
    padding: 20,
  },
});

export default App;