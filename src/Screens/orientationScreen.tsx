import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const OrientationScreen = () => {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState([]);
  const [onclick, setOnclick] = useState(false);
  console.log('start');
  console.log('user input', userInput);
  console.log;

  const DATA = [
    {
      id: '1',
      title: 'Lesbian',
    },
    {
      id: '2',
      title: 'Bisexual',
    },
    {
      id: '3',
      title: 'Asexual',
    },
    {
      id: '4',
      title: 'Demisexul',
    },
    {
      id: '5',
      title: 'pansexul',
    },
    {
      id: '6',
      title: 'Queer',
    },
    {
      id: '7',
      title: 'Bicurious',
    },
    {
      id: '8',
      title: 'Aromantic',
    },
    {
      id: '9',
      title: 'Homosexual',
    },
    {
      id: '10',
      title: 'Straight',
    },
    {
      id: '11',
      title: 'Gay',
    },
  ];
  const renderItem = ({item}) => (
    <View style={{width: '100%'}}>
      <Text style={{color: '#ECECEC', width: '100%'}}>
        _______________________________________________
      </Text>
      <TouchableOpacity
        style={{width: '55%'}}
        onPress={item => {
          setOnclick(true);
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: onclick ? 'red' : 'grey',
            marginVertical: 10,
            marginLeft: 20,
          }}>
          {item.title} {item.id}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 45, marginLeft: 45}}>
        <Text style={styles.title}>My sexual</Text>
        <Text style={styles.title}>orientation is</Text>
      </View>
      <Text style={{marginLeft: 45, marginTop: 16, fontSize: 15}}>
        Select up to 3
      </Text>

      <View style={styles.middleView}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => {
            item.id;
          }}
        />
      </View>

      <View style={styles.bottomView}>
        <View>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={'#fe3c72'}
          />
        </View>
        <Text style={styles.bottomTxt}>Show my orientation on my profile</Text>
      </View>
      <ButtonComponent
        buttonName="CONTINUE"
        disable={onclick ? false : true}
        Btn={{marginBottom: 20}}
      />
    </View>
  );
};

export default OrientationScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
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
    marginTop: 25,
    marginBottom: 15,
  },
  middleText: {
    fontSize: 15,
  },
  bottomTxt: {
    fontSize: 15,
    marginBottom: 20,
    paddingTop: 7,
  },
  bottomView: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  listText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
    marginVertical: 10,
    marginLeft: 20,
  },
});
