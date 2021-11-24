import { useNavigation, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapScreen from '../screens/MapScreen/map';
import UsersScreen from '../screens/UsersScreen/users';
import UserFormScreen from '../screens/UserFormScreen/userform';


const Tab = createMaterialBottomTabNavigator();


export default function MainTabScreen() {
  let navigation = useNavigation();
  
  
  
  useEffect(() => {
    


  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Map"
      activeColor="#00546f"
      inactiveColor='#008db9'

      barStyle={{ backgroundColor: 'white' }}
    >

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (

            <Icon name="map" color={color} size={25} />
          ),
          title: 'Map',

        }}


      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color }) => (
            <Icon name="users" color={color} size={25} />
          ),
          title: 'Users',
        }}
      />
      <Tab.Screen
        name="UserForm"
        component={UserFormScreen}
        options={{
          tabBarLabel: 'UserForm',
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard" color={color} size={25} />
          ),
          title: 'UserForm',
        }}
      />
    </Tab.Navigator>
  );
}

