import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';

const UniversityName = () => {
  const [userInput, setUserInput] = useState('');
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>My</Text>
        <Text style={styles.title}>university is</Text>
      </View>

      <TextInput
        onChangeText={text => setUserInput(text)}
        underlineColor="gray"
        activeUnderlineColor="#fe3c72"
        placeholder="University name"
        style={styles.textInput}></TextInput>

      <View style={styles.middleView}>
        <Text style={styles.middleText}>
          This is how it will appear in Tinder, and you will not be able to
          change it
        </Text>
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={userInput.length > 2 ? false : true}
        Btn={{marginBottom: 20}}
      />
    </View>
  );
};

export default UniversityName;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: '500',
    color: '#444444',
  },
  textInput: {
    marginTop: 60,
    width: '73%',
    alignSelf: 'center',
    backgroundColor: 'white',
    fontSize: 25,
  },
  middleView: {
    flex: 1,
    marginLeft: 55,
    marginTop: 17,
    width: '73%',
  },
  middleText: {
    fontSize: 15,
  },
});
