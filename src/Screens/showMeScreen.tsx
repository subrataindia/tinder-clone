import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';

const ShowMeScreen = ({navigation}) => {
  const [userInput, setUserInput] = useState('');
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>Show me</Text>
      </View>

      <View style={styles.middleView}>
        <ButtonComponent
          buttonName="WOMAN"
          disable={false}
          onPress={() => setUserInput('WOMAN')}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: userInput == 'WOMAN' ? 'red' : 'grey',
          }}
          BtnText={{color: userInput == 'WOMAN' ? 'red' : 'grey'}}
        />

        <ButtonComponent
          buttonName="MAN"
          disable={false}
          onPress={() => setUserInput('MAN')}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: userInput == 'MAN' ? 'red' : 'grey',
          }}
          BtnText={{color: userInput == 'MAN' ? 'red' : 'grey'}}
        />

        <ButtonComponent
          buttonName="EVERYONE"
          disable={false}
          onPress={() => setUserInput('EVERYONE')}
          Btn={{
            marginBottom: 20,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: userInput == 'EVERYONE' ? 'red' : 'grey',
          }}
          BtnText={{color: userInput == 'EVERYONE' ? 'red' : 'grey'}}
        />
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={userInput ? false : true}
        Btn={{marginBottom: 20}}
        onPress={() => {
          navigation.navigate('University');
        }}
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
