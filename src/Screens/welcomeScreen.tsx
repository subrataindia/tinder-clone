import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonComponent from '../Components/buttonComponent';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.logo}>
        <MaskedView
          style={{height: 50}}
          maskElement={
            <View
              style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="tinder" size={45} color="white" />
            </View>
          }>
          <LinearGradient
            colors={['#FF512F', '#fe3c72']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            locations={[0.2, 0.8]}>
            <Icon name="tinder" size={50} style={{opacity: 0}} />
          </LinearGradient>
        </MaskedView>
      </View>

      <View style={styles.topView}>
        <Text style={styles.topTitle}>Welcome to Tinder.</Text>
        <Text style={styles.topText}>Please follow these House Rules.</Text>
      </View>

      <View style={styles.middleView}>
        <View style={{marginVertical: 17}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="check" size={25} color="#fe3c72" />
            <Text style={styles.middleTtile}>Be yourself.</Text>
          </View>
          <Text style={styles.middleText}>
            Make sure your photos, age and bio are true to who you are.
          </Text>
        </View>

        <View style={{marginVertical: 17}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="check" size={25} color="#fe3c72" />
            <Text style={styles.middleTtile}>Stay safe.</Text>
          </View>
          <Text style={styles.middleText}>
            Don't be too quick to give out personal information.
          </Text>
        </View>

        <View style={{marginVertical: 17}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="check" size={25} color="#fe3c72" />
            <Text style={styles.middleTtile}>Play it cool.</Text>
          </View>
          <Text style={styles.middleText}>
            Respect others and treat them as you would like to be treated.
          </Text>
        </View>

        <View style={{marginVertical: 17}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="check" size={25} color="#fe3c72" />
            <Text style={styles.middleTtile}>Be proactive.</Text>
          </View>
          <Text style={styles.middleText}>Always report bad behavior.</Text>
        </View>
      </View>

      <ButtonComponent
        buttonName="I AGREE"
        disable={false}
        Btn={{marginBottom: 30}}
        onPress={() => {
          navigation.navigate('Name');
        }}
      />
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 30,
  },
  topView: {
    marginBottom: 20,
  },
  topTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  topText: {
    marginTop: 5,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'grey',
  },
  middleView: {
    flex: 1,
    marginHorizontal: 35,
  },
  middleTtile: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  middleText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '500',
    color: 'grey',
  },
});
