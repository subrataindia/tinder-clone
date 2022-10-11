import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import {Data} from '../Components/Data';

const Interest = () => {
  const [select, setSelect] = useState(Data);
  const [trueItems, setTrueItems] = useState(0);
  if (trueItems > 5) {
    Alert.alert('Only 5 selection Allowed');
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
      <TouchableOpacity
        style={{
          marginHorizontal: 2,
          borderColor: item.selected ? 'red' : 'grey',
          padding: 2,
          borderRadius: 35,
          borderWidth: 2,
          marginVertical: 10,
        }}
        onPress={() => handleOnprees(item)}>
        <Text
          style={{
            paddingRight: 20,
            fontSize: 17,
            color: item.selected ? 'red' : 'grey',
            marginVertical: 5,
            marginLeft: 20,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 45, marginLeft: 38}}>
        <Text style={styles.title}>Interests</Text>
      </View>
      <Text
        style={{
          marginLeft: 38,
          marginRight: 25,
          marginTop: 10,
          fontSize: 15,
          color: 'grey',
        }}>
        Let everyone know what you're passionate about, by adding it to your
        profile.
      </Text>

      <View style={styles.middleView}>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}
          data={select}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={trueItems > 2 && trueItems <= 5 ? false : true}
        Btn={{marginBottom: 20}}
        count={trueItems}
        div={'/'}
        total={'5'}
        onPress={() => {
          Alert.alert('End of Screens');
        }}
      />
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#444444',
  },

  middleView: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
});
