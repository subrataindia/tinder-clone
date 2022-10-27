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

const Location = ({navigation}) => {
  const [Latitude, setLatitude] = useState(0);
  const [Longitude, setLongitude] = useState(0);
  let jsonValue = {
    Latitude: 0,
    Longitude: 0,
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(data => {
      console.log('data', data);
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    });
    console.log('lati', Latitude);
    console.log('long', Longitude);
  };

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
      <View style={styles.logo}>
        <Entypo name="location" size={70} color="red" />
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
        Btn={{marginBottom: 20}}
        onPress={() => {
          getLocation();
          storeData();
          navigation.navigate('AddPhotos');
        }}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('LocationSecond');
        }}>
        <Text style={styles.btnTxt}>TELL ME MORE</Text>
        <MaterialIcons name="keyboard-arrow-down" size={25} color="grey" />
      </TouchableOpacity>
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
  btn: {
    alignSelf: 'center',
    marginBottom: 22,
    flexDirection: 'row',
  },
  btnTxt: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 2,
  },
});
