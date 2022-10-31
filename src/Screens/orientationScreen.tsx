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
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {saveUserOrientation} from '../Redux/Reducer';
import {orientationDATA} from '../Components/Data';

const OrientationScreen = ({navigation}) => {
  console.log('Orientationscreen');
  const [checked, setChecked] = useState(false);
  const Dispatch = useDispatch();

  const [select, setSelect] = useState(orientationDATA);

  const [trueItems, setTrueItems] = useState(0);

  const [userInput, setUserInput] = useState([]);

  const saveInput = () => {
    const input = select.map(val => {
      if (val.selected === true) {
        Dispatch(saveUserOrientation(val));
      }
    });
    setUserInput(input);
    console.log('userinput', userInput);
  };

  if (trueItems > 3) {
    Alert.alert('Only 3 selection Allowed');
  }

  function showButton(item) {
    console.log('sum', item);
    select.map(val => {
      if (item.selected === false) {
        setTrueItems(trueItems + 1);
      } else if (item.selected === true) {
        setTrueItems(trueItems - 1);
      }
    });
  }

  const handleOnprees = item => {
    showButton(item);
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(userInput);
      await AsyncStorage.setItem('Orientation_Key', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View>
          <Text style={{color: '#ECECEC', width: '100%'}}>
            _______________________________________________
          </Text>
          <TouchableOpacity
            style={{width: '55%'}}
            onPress={() => handleOnprees(item)}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: item.selected ? 'red' : 'grey',
                marginVertical: 10,
                marginLeft: 20,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Entypo
            name="check"
            size={25}
            color={item.selected ? 'red' : 'white'}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 45, marginLeft: 45}}>
        <Text style={styles.title}>My sexual</Text>
        <Text style={styles.title}>orientation is</Text>
      </View>
      <Text
        style={{marginLeft: 45, marginTop: 16, fontSize: 15, color: 'grey'}}>
        Select up to 3
      </Text>

      <View style={styles.middleView}>
        <FlatList
          data={select}
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
            color={'#fe3c72'}
          />
        </View>
        <Text style={styles.bottomTxt}>Show my orientation on my profile</Text>
      </View>
      <ButtonComponent
        buttonName="CONTINUE"
        disable={trueItems > 0 && trueItems <= 3 ? false : true}
        Btn={{marginBottom: 20}}
        onPress={() => {
          saveInput();
          navigation.navigate('Interest');
        }}
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
    color: 'grey',
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
