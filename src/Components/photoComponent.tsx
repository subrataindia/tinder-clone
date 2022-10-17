import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import {useLinkProps} from '@react-navigation/native';

const PhotoComponent = props => {
  return (
    <View>
      <View style={styles.mainView}>
        <Image
          resizeMode={'cover'}
          resizeMethod={'auto'}
          style={{
            width: 105,
            height: 145,
            borderRadius: 7,
          }}
          source={{
            uri: props.uri,
          }}
        />
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <MaskedView
          style={{height: 50, marginLeft: 98, marginTop: -22}}
          maskElement={
            <View
              style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="pluscircle" size={30} color="white" />
            </View>
          }>
          <LinearGradient
            colors={['#FF512F', '#fe3c72']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0.2, 0.8]}>
            <AntDesign name="pluscircle" size={30} style={{opacity: 0}} />
          </LinearGradient>
        </MaskedView>
      </TouchableOpacity>
    </View>
  );
};
export default PhotoComponent;

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 9,
    height: 150,
    width: 110,
    borderColor: '#c9c9c9',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  tinyLogo: {
    width: 105,
    height: 145,
    borderRadius: 7,
  },
});
