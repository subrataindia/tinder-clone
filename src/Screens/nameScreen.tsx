import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';

const NameScreen = ({navigation}) => {
  const [userInput, setUserInput] = useState('');
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
          navigation.navigate('Birthday');
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
  },
});
