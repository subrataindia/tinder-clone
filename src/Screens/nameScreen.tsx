import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NameScreen = ({navigation}) => {
  console.log('namescreen');
  const [userInput, setUserInput] = useState('');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Name_Key', userInput);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>My first</Text>
        <Text style={styles.title}>name is</Text>
      </View>

      <TextInput
        onChangeText={text => setUserInput(text)}
        underlineColor="gray"
        activeUnderlineColor="#fe3c72"
        placeholder="First name"
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
        ui={userInput.length > 2 ? false : true}
        Btn={{marginBottom: 20}}
        onPress={() => {
          storeData();
          navigation.navigate('Birthday', userInput);
        }}
      />
    </View>
  );
};

export default NameScreen;

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
    color: 'grey',
  },
});
