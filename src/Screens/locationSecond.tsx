import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import {TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {saveUserLatitude, saveUserLongitude} from '../Redux/Reducer';

const LocationSecond = ({navigation}) => {
  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);
  const Dispatch = useDispatch();
  let jsonValue = {
    Latitude: 0,
    Longitude: 0,
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(data => {
      Dispatch(saveUserLatitude(data.coords.latitude));
      Dispatch(saveUserLongitude(data.coords.longitude));
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    });
    navigation.navigate('AddPhotos');
  };
  console.log('lati', Latitude);
  console.log('long', Longitude);
  const storeData = async () => {
    try {
      jsonValue.Latitude = Latitude;
      jsonValue.Longitude = Longitude;
      const value = JSON.stringify(jsonValue);
      await AsyncStorage.setItem('Location_Key', value);
    } catch (e) {
      console.log(e);
    }
  };

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
