import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BirthdayScreen from './src/Screens/birthdayScreen';
import NameScreen from './src/Screens/nameScreen';
import OrientationScreen from './src/Screens/orientationScreen';
import ShowMeScreen from './src/Screens/showMeScreen';
import UniversityName from './src/Screens/universityScreen';
import UserGenderScreen from './src/Screens/userGenderScreen';
import WelcomeScreen from './src/Screens/welcomeScreen';
import Interest from './src/Screens/interests';
import Location from './src/Screens/location';
import LocationSecond from './src/Screens/locationSecond';
import AddPhotos from './src/Screens/addPhotos';
import PhotoComponent from './src/Components/photoComponent';
import PhotoOption from './src/Screens/photoOption';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          component={WelcomeScreen}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={NameScreen}
          name="Name"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BirthdayScreen}
          name="Birthday"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserGenderScreen}
          name="Gender"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ShowMeScreen}
          name="Showme"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UniversityName}
          name="University"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OrientationScreen}
          name="Orientation"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Interest}
          name="Interest"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Location}
          name="Location"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LocationSecond}
          name="LocationSecond"
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          component={AddPhotos}
          name="AddPhotos"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PhotoOption}
          name="PhotoOption"
          options={{
            title: 'Select source',
            headerTintColor: 'red',
            headerTitleStyle: {color: '#333333'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
