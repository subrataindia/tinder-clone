import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';

const ShowMeScreen = () => {
  const [userInput, setUserInput] = useState('');
  const [onclick, setOnclick] = useState(false);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>Show me</Text>
      </View>

      <View style={styles.middleView}>
        <ButtonComponent
          buttonName="WOMAN"
          disable={false}
          onPress={() => setOnclick(true)}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'grey',
          }}
          BtnText={{color: onclick ? 'red' : 'grey'}}
        />

        <ButtonComponent
          buttonName="MAN"
          disable={false}
          onPress={() => setOnclick(true)}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'grey',
          }}
          BtnText={{color: 'grey'}}
        />

        <ButtonComponent
          buttonName="EVERYONE"
          disable={false}
          onPress={() => setOnclick(true)}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'grey',
          }}
          BtnText={{color: 'grey'}}
        />
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={userInput ? false : true}
        Btn={{marginBottom: 20}}
      />
    </View>
  );
};

export default ShowMeScreen;

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
    alignSelf: 'center',
    width: '100%',
    marginVertical: '35%',
  },
  middleText: {
    fontSize: 15,
  },
});
