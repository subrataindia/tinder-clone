import React from 'react';
import {View} from 'react-native';
import NavigationStack from './src/Navigation/NavigationStack';
import BirthdayScreen from './src/Screens/birthdayScreen';
import NameScreen from './src/Screens/nameScreen';
import OrientationScreen from './src/Screens/orientationScreen';
import ShowMeScreen from './src/Screens/showMeScreen';
import UniversityName from './src/Screens/universityScreen';
import UserGenderScreen from './src/Screens/userGenderScreen';
import WelcomeScreen from './src/Screens/welcomeScreen';
const App = () => {
  return (
    <View>
      <OrientationScreen/>
    </View>
  );
};
export default App;
