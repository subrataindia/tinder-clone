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

  console.log('start');

  const DATA = [
    {
      id: '1',
      title: 'Lesbian',
      selected: false,
    },
    {
      id: '2',
      title: 'Bisexual',
      selected: false,
    },
    {
      id: '3',
      title: 'Asexual',
      selected: false,
    },
    {
      id: '4',
      title: 'Demisexul',
      selected: false,
    },
    {
      id: '5',
      title: 'pansexul',
      selected: false,
    },
    {
      id: '6',
      title: 'Queer',
      selected: false,
    },
    {
      id: '7',
      title: 'Bicurious',
      selected: false,
    },
    {
      id: '8',
      title: 'Aromantic',
      selected: false,
    },
    {
      id: '9',
      title: 'Homosexual',
      selected: false,
    },
    {
      id: '10',
      title: 'Straight',
      selected: false,
    },
    {
      id: '11',
      title: 'Gay',
      selected: false,
    },
  ];
  const [select, setSelect] = useState(DATA);

  const [trueItems, setTrueItems] = useState(0);

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

  const renderItem = ({item}) => {
    return (
      <View style={{width: '100%'}}>
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
    );
  };

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
          Alert.alert('End of Screens');
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
