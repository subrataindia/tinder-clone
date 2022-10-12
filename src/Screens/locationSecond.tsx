import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import {TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationSecond = ({navigation}) => {
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);
  const getLocation = () => {
    Geolocation.getCurrentPosition(data => {
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    });
  };
  console.log(Latitude);
  console.log(Longitude);
  return (
    <View style={{height: '100%'}}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Location');
        }}>
        <MaterialIcons name="keyboard-arrow-up" size={26} color="grey" />
      </TouchableOpacity>
      <ButtonComponent
        buttonName="ALLOW LOCATION"
        disable={false}
        Btn={{marginBottom: 20}}
        onPress={() => {
          getLocation();
        }}
      />

      <View style={styles.middleView}>
        <Text style={styles.middleTitle}>Meet people nearby</Text>
        <Text style={styles.middleText}>Your location will be used to</Text>
        <Text style={styles.middleText}>show</Text>
        <Text style={styles.middleText}>potential matches near you</Text>
      </View>
    </View>
  );
};
export default LocationSecond;

const styles = StyleSheet.create({
  middleView: {
    marginBottom: '20%',
    marginVertical: '50%',
  },

  middleTitle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#333333',
    alignSelf: 'center',
    marginBottom: 15,
  },
  middleText: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'grey',
  },
  btn: {
    alignSelf: 'center',
    marginBottom: 22,
    flexDirection: 'row',
    marginVertical: 10,
  },
  btnTxt: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 2,
  },
});
