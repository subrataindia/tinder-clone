import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {saveUniversity} from '../Redux/Reducer';

const UniversityName = ({navigation}) => {
  const [userInput, setUserInput] = useState('');
  const Dispatch = useDispatch();
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('University_Key', userInput);
    } catch (e) {
      console.log(e);
    }
    Dispatch(saveUniversity(userInput));
  };
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
        onPress={() => {
          storeData();
          navigation.navigate('Orientation');
        }}
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
    color: 'grey',
  },
});
