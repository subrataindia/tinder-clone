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
import {Data} from '../Components/Data';
console.log(Data);
const Interest = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{width: '100%'}}>
        <View>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.listText}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
          numColumns={2}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={false}
        Btn={{marginBottom: 20}}
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
  list: {
    padding: 4,
    borderRadius: 35,
    borderColor: 'grey',
    borderWidth: 2,
    marginVertical: 10,
  },
  listText: {
    fontSize: 18,
    color: 'grey',
    marginVertical: 5,
    marginLeft: 20,
  },
});
