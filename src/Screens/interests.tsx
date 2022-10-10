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
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View>
          <ButtonComponent
            buttonName={item.title}
            disable={false}
            ui={true}
            Btn={{
              marginBottom: 20,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'grey',
            }}
            BtnText={{color: 'grey'}}
          />
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
          numColumns={5}
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
  listText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
    marginVertical: 10,
    marginLeft: 20,
  },
});
