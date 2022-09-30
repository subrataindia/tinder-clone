import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const OrientationScreen = () => {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [onclick, setOnclick] = useState(false);

  const DATA = [
    {
      id: '1',
      title: 'Data Structures',
    },
    {
      id: '2',
      title: 'STL',
    },
    {
      id: '3',
      title: 'C++',
    },
    {
      id: '4',
      title: 'Java',
    },
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        Alert.alert('clicked', item.title);
      }}>
      <Text>{item.title}</Text>
      <Text>---------</Text>
    </TouchableOpacity>
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
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.bottomView}>
        <View>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Text style={styles.bottomTxt}>Show my orientation on my profile</Text>
      </View>
      <ButtonComponent
        buttonName="CONTINUE"
        disable={userInput ? false : true}
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
    width: '100%',
    marginVertical: '35%',
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
});
