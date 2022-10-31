import React from 'react';
import Home from './Home';
import Explore from './Explore';
import Likes from './Likes';
import Messages from './Messages';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const DashBoard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#777777',
        tabBarActiveTintColor: '#fe3c72',
        headerTitle: 'tinder',
        headerTintColor: '#fe3c72',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: '600',
        },
        headerLeft: () => (
          <Icon
            name="tinder"
            color={'#fe3c72'}
            size={25}
            style={{marginLeft: 15}}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="tinder" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="movie-search"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="star" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="message" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-alt" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default DashBoard;
