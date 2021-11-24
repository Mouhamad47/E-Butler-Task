
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen/home';
import ScheduleScreen from '../screens/ScheduleScreen/schedule';






const Stack = createNativeStackNavigator();


export default function SwitchStack(){
    return (
        <Stack.Navigator initialRouteName ="Home">
            <Stack.Screen name = "Home" component = {HomeScreen} options={{headerShown : false}} />
            <Stack.Screen name = "Schedule" component = {ScheduleScreen} options={{headerShown : true,headerStyle:{backgroundColor:'#3BA5A5'},headerTintColor:'white'}} />
            
        </Stack.Navigator>
    );


    
}