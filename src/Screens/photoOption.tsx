import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhotoOption = ({navigation, route}) => {
  const selectImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (image != undefined) {
        route.params.setImagePath(image);
        navigation.navigate('AddPhotos');
      }
    });
  };
  const selectImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);

      if (image != undefined) {
        route.params.setImagePath(image);
        navigation.navigate('AddPhotos');
      }
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          selectImageFromCamera();
        }}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={styles.cameraView}>
            <FontAwesome name="camera" size={30} color="grey" />
          </View>
          <Text style={styles.cameraTxt}>Camera</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.border}></View>
      <TouchableOpacity
        onPress={() => {
          selectImageFromGallery();
        }}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={styles.galleryView}>
            <Foundation name="photo" size={33} color="grey" />
          </View>
          <Text style={styles.galleryTxt}>Gallery</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.border}></View>
    </View>
  );
};
export default PhotoOption;

const styles = StyleSheet.create({
  cameraView: {
    backgroundColor: '#DEDEDE',
    marginLeft: 17,
    padding: 14,
  },
  cameraTxt: {
    marginLeft: 45,
    fontSize: 22,
    color: '#333333',
    paddingTop: 11,
    fontWeight: '500',
  },
  galleryView: {
    backgroundColor: '#DEDEDE',
    marginLeft: 17,
    padding: 14,
  },
  galleryTxt: {
    marginLeft: 48,
    fontSize: 22,
    color: '#333333',
    paddingTop: 11,
    fontWeight: '500',
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: '#DEDEDE',
    marginTop: 28,
    marginLeft: 120,
    marginRight: 2,
    opacity: 1,
  },
});
