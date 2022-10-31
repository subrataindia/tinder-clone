import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {saveInterestGender} from '../Redux/Reducer';

const ShowMeScreen = ({navigation}) => {
  console.log('Show mescreen');
  const [userInput, setUserInput] = useState('');
  const Dispatch = useDispatch();
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Showme_Key', userInput);
    } catch (e) {
      console.log(e);
    }
    Dispatch(saveInterestGender(userInput));
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>Show me</Text>
      </View>

      <View style={styles.middleView}>
        <ButtonComponent
          buttonName="WOMAN"
          disable={false}
          ui={true}
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
          ui={true}
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
          ui={true}
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
          storeData();
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
