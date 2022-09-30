import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const UserGenderScreen = () => {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [onclick, setOnclick] = useState(false);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>I am a</Text>
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
          buttonName="MORE"
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
      <View style={styles.bottomView}>
        
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        
        <Text style={styles.bottomTxt}>Show my gender on my profile</Text>
      </View>
      <ButtonComponent
        buttonName="CONTINUE"
        disable={userInput ? false : true}
        Btn={{marginBottom: 20}}
      />
    </View>
  );
};

export default UserGenderScreen;

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
  bottomTxt: {
    fontSize: 15,
    marginBottom: 15,
    alignSelf:'center',
    paddingTop:7
  },
  bottomView: {
    alignSelf: 'center',
    flexDirection: 'row',

  },
});
