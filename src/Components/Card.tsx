import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = () => {
  return (
    <View style={styles.mainView}>
      <Image
        resizeMode={'cover'}
        resizeMethod={'auto'}
        style={styles.imageStyle}
        source={{
          uri: 'file:///storage/emulated/0/Android/data/com.tinderclone/files/Pictures/96335ed6-687d-46a2-b5ff-06b48e24089d.jpg',
        }}
      />
      <Text style={styles.name}>siddharth</Text>
      <View style={{flexDirection: 'row'}}>
        <AntDesign name="home" color={'white'} size={22} style={styles.icon} />
        <Text style={styles.iconText}>Lives in Jabalpur</Text>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  imageStyle: {
    width: 383,
    height: '100%',
    borderRadius: 7,
  },
  mainView: {
    top: 4,
    marginBottom: 12,
  },
  name: {
    position: 'absolute',
    bottom: 80,
    left: 22,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    bottom: 50,
    left: 22,
  },
  iconText: {
    position: 'absolute',
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    bottom: 47,
    left: 55,
  },
});
