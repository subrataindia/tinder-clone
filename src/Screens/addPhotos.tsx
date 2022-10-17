import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import PhotoComponent from '../Components/photoComponent';

const AddPhotos = ({navigation, route}) => {
  const Img = route.params;
  console.log('Img', Img);
  /* if (Img != undefined) {
    console.log('internal', Img.id);
  } */

  return (
    <View style={{height: '100%'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Add photos</Text>
        <Text style={styles.topText}>Add at least 2 photos to continue</Text>
      </View>

      <View style={styles.middleView}>
        <View style={{flexDirection: 'row'}}>
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '1')}
            uri={Img != undefined && Img.id == 1 ? Img.image.path : undefined}
          />
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '2')}
            uri={Img != undefined && Img.id == 2 ? Img.image.path : undefined}
          />
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '3')}
            uri={Img != undefined && Img.id == 3 ? Img.image.path : undefined}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '4')}
            uri={Img != undefined && Img.id == 4 ? Img.image.path : undefined}
          />
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '5')}
            uri={Img != undefined && Img.id == 5 ? Img.image.path : undefined}
          />
          <PhotoComponent
            onPress={() => navigation.navigate('PhotoOption', '6')}
            uri={Img != undefined && Img.id == 6 ? Img.image.path : undefined}
          />
        </View>
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={false}
        Btn={{marginBottom: 30}}
        onPress={() => {}}
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
