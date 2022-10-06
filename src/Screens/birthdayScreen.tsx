import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const BirthdayScreen = ({navigation}) => {
  const [date, setDate] = useState();
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>My </Text>
        <Text style={styles.title}>Birthday is</Text>
      </View>

      <TextInput
        onChangeText={text => setDate(text)}
        underlineColor="white"
        activeUnderlineColor="white"
        placeholder="D D / M M / Y Y Y Y "
        style={styles.textInput}></TextInput>

      <View style={styles.middleView}>
        <Text style={styles.middleText}>Your age will be public.</Text>
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={date ? false : true}
        Btn={{marginBottom: 20}}
        onPress={() => {
          navigation.navigate('Gender');
        }}
      />
    </View>
  );
};

export default BirthdayScreen;

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
    marginLeft: 62,
    marginTop: 0,
    width: '73%',
  },
  middleText: {
    fontSize: 15,
  },
});
