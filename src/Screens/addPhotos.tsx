import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import PhotoComponent from '../Components/photoComponent';

const AddPhotos = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Add photos</Text>
        <Text style={styles.topText}>Add at least 2 photos to continue</Text>
      </View>

      <View style={styles.middleView}>
        <View style={{flexDirection: 'row'}}>
          <PhotoComponent onPress={() => console.log('rrr')} />
          <PhotoComponent />
          <PhotoComponent />
        </View>
        <View style={{flexDirection: 'row'}}>
          <PhotoComponent />
          <PhotoComponent />
          <PhotoComponent />
        </View>
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={false}
        Btn={{marginBottom: 30}}
        onPress={() => {
          navigation.navigate('Name');
        }}
      />
    </View>
  );
};
export default AddPhotos;

const styles = StyleSheet.create({
  topView: {
    marginTop: 60,
  },
  topTitle: {
    fontSize: 38,
    fontWeight: '500',
    color: '#333333',
    alignSelf: 'center',
  },
  topText: {
    marginTop: 5,
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'grey',
  },
  middleView: {
    flex: 1,
    marginHorizontal: 3,
    marginTop: 70,
  },
  mainView: {
    alignSelf: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 9,
    height: 150,
    width: 110,
    borderColor: '#c9c9c9',
    borderWidth: 2,
    marginHorizontal: 8,
    marginVertical: 8,
    borderStyle: 'dashed',
  },
});
