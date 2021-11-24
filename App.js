import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/LoginScreen/login";
import MainTabScreen from './navigation/MainTabScreen';



const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#008db9'},headerTintColor:'white'}}>

        <>
          <Stack.Screen name = "Login" component = {Login} options={{headerShown : false}} />
        </>
      </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#008db9'},headerTintColor:'white'}}  >
        <Stack.Screen name = "Auth" component ={Auth} options={{headerShown: false}}/>
        <Stack.Screen  name = "MainTabScreen" component ={MainTabScreen} options={{headerShown: true}} />
        

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
