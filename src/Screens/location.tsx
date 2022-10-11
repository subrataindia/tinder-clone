import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const Location = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.logo}>
        <Icon name="tinder" size={45} color="red" />
      </View>

      <View style={styles.middleView}>
        <Text style={styles.middleTitle}>Enable location</Text>
        <Text style={styles.middleText}>You'll need to enable your</Text>
        <Text style={styles.middleText}>location</Text>
        <Text style={styles.middleText}>in order to use Tinder</Text>
      </View>

      <ButtonComponent
        buttonName="ALLOW LOCATION"
        disable={false}
        Btn={{marginBottom: 30}}
        onPress={() => {
          navigation.navigate('Name');
        }}
      />
    </View>
  );
};
export default Location;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignSelf: 'center',
    marginTop: '25%',
    marginBottom: 30,
  },
  middleView: {
    marginBottom: '20%',
  },

  middleTitle: {
    fontSize: 35,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 21,
  },
  middleText: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'grey',
  },
});
