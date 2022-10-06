import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/welcomeScreen';
import NameScreen from '../Screens/nameScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
