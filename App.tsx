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

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={WelcomeScreen} name="Home" />
        <Stack.Screen component={NameScreen} name="Name" />
        <Stack.Screen component={BirthdayScreen} name="Birthday" />
        <Stack.Screen component={UserGenderScreen} name="Gender" />
        <Stack.Screen component={ShowMeScreen} name="Showme" />
        <Stack.Screen component={UniversityName} name="University" />
        <Stack.Screen component={OrientationScreen} name="Orientation" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
