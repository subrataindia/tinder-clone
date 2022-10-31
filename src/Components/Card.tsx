import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({props}: {props: any}) => {
  return (
    <View style={styles.mainView}>
      <Image
        resizeMode={'cover'}
        resizeMethod={'auto'}
        style={styles.imageStyle}
        source={{
          uri: props?.url,
        }}
      />

      <Text style={styles.name}>{props?.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <AntDesign name="home" color={'white'} size={22} style={styles.icon} />
        <Text style={styles.iconText}>Lives in {props?.place}</Text>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '99%',
    borderRadius: 7,
    bottom: 37,
  },
  mainView: {
    bottom: 12,
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
    bottom: 45,
    left: 55,
  },
});
